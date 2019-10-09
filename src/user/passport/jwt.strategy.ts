import * as passport from 'passport';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { NextFunction, Request } from 'express';
import { UserService } from '../service/user.service';
import { IUser } from '../schemas/user.schema';
import { ConfigService } from 'src/config/config.service';
const config: ConfigService = new ConfigService(`environments/${process.env.NODE_ENV || 'development'}.env`);
const secret: string = config.get('secret');

@Injectable()
export class JwtStrategy extends Strategy {
    public constructor(private readonly _userService: UserService) {
        super(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                passReqToCallback: true,
                secretOrKey: secret,
            },
            async (req: Request, payload: string, next: NextFunction) => await this.verify(req, payload, next)
        );
        passport.use(this);
    }
    public async verify(_req: Request, payload: string, done: VerifiedCallback): Promise<void> {
        console.log(payload);
        const isValid: IUser = await this._userService.getUser({ login: payload }, { _id: 1 });
        if (!isValid) {
            return done(null, false);
        }
        return done(null, payload);
    }
}
