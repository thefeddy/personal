import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

import { RouterModule, Routes } from 'nest-router';


/* Modules */
import { HomeModule } from './home/home.module';
import { MailerModule } from './mailer/mailer.module';

const routes: Routes = [
    {
        path: '/',
        module: HomeModule,
    },
];


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
        RouterModule.forRoutes(routes),
        MailerModule,
        HomeModule,
    ],
    controllers: [],
    providers: [],
})

export class AppModule { }
