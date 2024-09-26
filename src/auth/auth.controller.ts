import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AuthEntity } from './entity/auth.entity';
import { ApiOkResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({ type: AuthEntity})
  @ApiCreatedResponse({ description: 'User LoggedIn Successfully' })
  login(@Body() {email, password} : LoginDto){

    return this.authService.login(email, password);

  }
}
