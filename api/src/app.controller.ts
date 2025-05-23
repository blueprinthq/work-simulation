import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  async getUsers(): Promise<string> {
    return this.appService.getUsers();
  }

  @Get('transcript')
  async getTranscript(): Promise<string> {
    return this.appService.getTranscript();
  }
}
