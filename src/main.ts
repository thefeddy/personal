import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { join } from 'path';

import * as exphbs from 'express-handlebars';

import { AppModule } from './app.module';

const PUBLIC_PATH = join(__dirname, '..', 'public');
const VIEWS_PATH = join(__dirname, '..', 'src/views');

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.useStaticAssets(PUBLIC_PATH);
    app.setBaseViewsDir(VIEWS_PATH);

    const blocks = {};
    const helpers = {
        extend: function (name, context) {
            var block = blocks[name];
            if (!block) {
                block = blocks[name] = [];
            }

            block.push(context.fn(this));
        },
        block: function (name) {
            var val = (blocks[name] || []).join('\n');

            // clear the block
            blocks[name] = [];
            return val;
        },
    };

    const hbs = exphbs.create({
        defaultLayout: 'base',
        layoutsDir: VIEWS_PATH,
        partialsDir: join(__dirname, '..', 'views', 'partials'),
        helpers,
        extname: '.hbs',
    });

    app.engine('hbs', hbs.engine);
    app.setViewEngine('hbs');

    app.use((req, res, next) => {
        res.set('X-Powered-By', 'Lots and Lots of Coffee');
        next();
    });
    await app.listen(3000);
}
bootstrap();
