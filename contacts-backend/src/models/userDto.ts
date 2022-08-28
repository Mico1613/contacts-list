import { IsNotEmpty, IsString, Length } from 'class-validator';

export class userDto {
  @IsString({ message: 'Login must be a string' })
  @Length(4, 16, { message: 'Login must be from 4 to 16 characters' })
  readonly login: string;
  @IsNotEmpty({ message: "Password hasn't been sent" })
  @IsString({ message: 'Password must be a string' })
  readonly password: string;
}
