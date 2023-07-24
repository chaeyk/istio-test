import {
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  Put,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import * as os from 'os';
import { Response } from 'express';

@Controller()
export class AppController {
  private liveness = true;

  private readiness = true;

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return {
      hostname: os.hostname(),
      liveness: this.liveness,
      readiness: this.readiness,
      message: this.appService.getHello(),
    };
  }

  @Put('/liveness/:value')
  setLiveness(@Param('value', new ParseBoolPipe()) value: boolean) {
    this.liveness = value;
    return { hostname: os.hostname(), liveness: this.liveness };
  }

  @Get('/liveness')
  getLiveness(@Res() res: Response) {
    res
      .status(this.liveness ? 200 : 503)
      .json({ hostname: os.hostname(), liveness: this.liveness });
  }

  @Put('/readiness/:value')
  setReadiness(@Param('value', new ParseBoolPipe()) value: boolean) {
    this.readiness = value;
    return { hostname: os.hostname(), readiness: this.readiness };
  }

  @Get('/readiness')
  getReadiness(@Res() res: Response) {
    res
      .status(this.readiness ? 200 : 503)
      .json({ hostname: os.hostname(), readiness: this.readiness });
  }
}
