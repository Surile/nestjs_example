import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { json } from 'body-parser';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('type')
  getAllType(@Res() res) {
    this.appService.getAllType().then(response => {
      // return res;
      if (response.data.errorCode == 0) {
        res.status(HttpStatus.OK).send({
          // errorCode: response.data.errorCode,
          // errorMessage: response.data.errorMessage,
          ...response.data,
        });
      } else {
        res.status(HttpStatus.OK).send({
          errorCode: response.data.errorCode,
          errorMessage: '系统繁忙，请稍后再试',
        });
      }
    });
  }
}
