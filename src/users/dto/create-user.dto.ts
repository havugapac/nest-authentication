import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength, IsOptional, IsInt } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  fname: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  lname: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nidPassport: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  address: string;

  @IsOptional() 
  @IsString()
  @ApiProperty({ required: false })
  userToken?: string;

  @IsOptional()
  @IsInt()
  @ApiProperty({ required: false })
  createdBy?: number;

  @IsOptional()
  @IsInt()
  @ApiProperty({ required: false })
  status?: number;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  roleId: number;
}
