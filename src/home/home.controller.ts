import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('')
export class HomeController {
    constructor() { }

    @Get('/')
    @Render('home/index')
    async index(@Res() res: Response): Promise<any> { }
}
