import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
  
    constructor(partial: Partial<UserEntity>) {
        Object.assign(this, partial);
      }
      
  @ApiProperty()
  id: number;

  @ApiProperty()
  fname: string;

  @ApiProperty()
  lname: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  nidPassport: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  userToken: string;

  @ApiProperty()
  roleId: number;

  @ApiProperty()
  createdBy: number;

  @ApiProperty()
  status: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @Exclude()
  password: string;
}