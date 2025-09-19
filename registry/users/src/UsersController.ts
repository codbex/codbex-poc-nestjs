import { Controller, Get } from '@nestjs/common';
import { UsersService } from './UsersService';
import { Utils } from '../../common-utils/src/Utils';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return [Utils.getMessage(), ...this.usersService.findAll()];
  }
}
