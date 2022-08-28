import { Module } from '@nestjs/common';
import { RegistrationModule } from './registration/registration.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [RegistrationModule, AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
