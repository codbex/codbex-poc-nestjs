import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

@Injectable()
export class UsersService {
  findAll() {
    return [{ id: 1, name: 'Alice', uuid: v4() }, { id: 2, name: 'Bob', uuid: v4() }];
  }
}
