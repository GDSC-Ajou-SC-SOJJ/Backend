import { IsNotEmpty, IsEmail } from 'class-validator';
import { Column } from 'typeorm';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @Column()
  country: string;

  @Column()
  gender: number;

  @Column()
  name: number;
}
