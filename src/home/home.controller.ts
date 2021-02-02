import { Body, Controller, Get, HttpStatus, Post, Render, Res } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

import { Response } from 'express';


import { ContactDTO } from './dto/contact.dto';

@Controller('')
export class HomeController {
    constructor(private readonly mailerService: MailerService) { }

    @Get('/')
    @Render('home/index')
    async index(@Res() res: Response): Promise<any> {

    }


    @Post('/mail/')
    async sendMail(
        @Body() contactDTO: ContactDTO,
        @Res() res: Response
    ): Promise<any> {
        console.log(contactDTO);
        await this.mailerService.sendMail({
            to: 'thefeddy@gmail.com',
            from: 'no-reply@dfriedrich.dev',
            subject: `RCF : ${contactDTO.full_name} `,
            template: 'src/views/emails/resume',
            context: {
                name: contactDTO.full_name,
                email: contactDTO.email,
                phone: contactDTO.phone,
                message: contactDTO.message
            },
        });

        return res.status(HttpStatus.OK).json({
            status: HttpStatus.OK
        });
    }
}
