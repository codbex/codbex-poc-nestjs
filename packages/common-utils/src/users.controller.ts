import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../../users/src/users.service';

@Controller('demo')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return `Hello ${this.usersService.findAll()[0].name}`;
  }
}
