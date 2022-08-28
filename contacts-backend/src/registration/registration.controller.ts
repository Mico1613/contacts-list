import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ValidationPipe } from '../pipes/validation.pipe';
import { userDto } from '../models';
import { RegistrationService } from './registration.service';

@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() data: userDto) {
    return this.registrationService.createUser(data);
  }
}
