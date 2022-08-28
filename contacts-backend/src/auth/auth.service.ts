import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { userDto } from '../models';
import { notFoundException } from '../exceptions/notFound.exception';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async auth(user: userDto) {
    const foundUser = this.usersService.findOne(user);

    if (!foundUser) {
      throw new notFoundException();
    }

    return 1;
  }
}
