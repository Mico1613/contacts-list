import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ValidationPipe } from '../pipes/validation.pipe';
import { userDto } from '../models';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async auth(@Body() user: userDto) {
    return this.authService.auth(user);
  }
}
