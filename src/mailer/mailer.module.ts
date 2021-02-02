import { Global, Module } from '@nestjs/common';
import { MailerModule as NestMailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'

@Global()
@Module({
    imports: [
        NestMailerModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                transport: {
                    service: 'gmail',
                    host: config.get('SMTP_HOST'),
                    port: parseInt(config.get('SMTP_PORT'), 10) || 587,
                    auth: {
                        user: config.get('SMTP_USERNAME'),
                        pass: config.get('SMTP_PASSWORD'),
                    },
                },
                defaults: {
                    from: '"Resume Contact Form" <no-reply@dfriedrich.dev>',
                },
                template: {
                    dir: process.cwd() + '/templates/',
                    adapter: new HandlebarsAdapter(),
                },
            }),
        }),
    ],
    exports: [NestMailerModule],
})

export class MailerModule { }
