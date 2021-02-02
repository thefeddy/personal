import { Controller, Get, Render, Res } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

import { Response } from 'express';


@Controller('')
export class HomeController {
    constructor(private readonly mailerService: MailerService) { }

    @Get('/')
    @Render('home/index')
    async index(@Res() res: Response): Promise<any> {
        // await this.mailerService.sendMail({
        //     to: 'thefeddy@gmail.com',
        //     from: 'no-reply@dfriedrich.dev',
        //     subject: 'Resume Contact Form',
        //     template: 'src/views/emails/resume',
        //     context: {

        //     },
        // });
    }
}
