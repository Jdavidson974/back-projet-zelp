import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    signIn(email: string, pass: string): Promise<any> {
        const errorMsg = "Identifiant ou mot de passe incorect"

        return this.usersService.findOnebyEmail(email).then(
            user => {
                if (user) {
                    return bcrypt.compare(pass, user.password).then(
                        match => {
                            if (match) {
                                const payload = { username: user.email, sub: user.id };
                                return this.jwtService.signAsync(payload).then(
                                    token => {
                                        return {
                                            access_token: token
                                        }
                                    }
                                )
                            } else {
                                throw new HttpException(errorMsg, HttpStatus.FORBIDDEN)
                            }
                        }
                    );
                } else {
                    throw new HttpException(errorMsg, HttpStatus.FORBIDDEN)
                }
            }
        );
    }
}
