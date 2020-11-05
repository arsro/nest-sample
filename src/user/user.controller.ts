import { Controller, Get } from '@nestjs/common';

// interface
import { User } from './user.interface';

@Controller('user')
export class UserController {
  @Get()
  getUserList(): User[] {
    return [
      {
        id: 3,
        name: 'Nest太郎',
        age: 24,
      },
      {
        id: 4,
        name: 'Nest二郎',
        age: 21,
      },
    ];
  }
}
