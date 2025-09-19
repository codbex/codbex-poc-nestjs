import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../../users/src/UsersService';

@Controller('demo')
export class DemoController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return `Hello ${this.usersService.findAll()[0].name}`;
  }
}
