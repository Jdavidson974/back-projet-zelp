import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth/auth.guard';
import { Public } from 'src/shared/decorators/public.decorator';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Public()
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) {
        const errorMsg = "Oups une erreur est survenue"
        if (signInDto.email && signInDto.password) {
            return this.authService.signIn(signInDto.email, signInDto.password);
        } else {
            throw new HttpException(errorMsg, HttpStatus.FORBIDDEN)
        }
    }
    @Public()
    @Post('register')
    register(@Body() registerDto: RegisterDto) {
        return this.authService.registerAndLogin(registerDto);
    }

    @Get('profile')
    getProfile(@Req() req) {
        return req.user;
    }
}

