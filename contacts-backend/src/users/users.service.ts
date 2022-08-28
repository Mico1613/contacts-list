import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { userDto } from '../models';

@Injectable()
export class UsersService {
  private readonly users = [];

  addUser(user: userDto) {
    if (this.findOne(user)) {
      throw new HttpException(
        'Current user already exists',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    this.users.push(user);
    return user;
  }

  findOne(user: userDto) {
    const foundUser = this.users.find((item) => item.login === user.login);
    return foundUser;
  }
}
