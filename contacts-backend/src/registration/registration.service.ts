import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { userDto } from '../models';

@Injectable()
export class RegistrationService {
  constructor(private readonly userService: UsersService) {}

  async createUser(data: userDto) {
    return this.userService.addUser(data);
  }
}
