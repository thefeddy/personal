import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { RouterModule, Routes } from 'nest-router';


/* Modules */
import { HomeModule } from './home/home.module';

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
        HomeModule
    ],
    controllers: [],
    providers: [],
})

export class AppModule { }
