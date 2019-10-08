import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { IUser } from '../schemas/user.schema';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class AuthService {
    public constructor(
        @Inject('UserModelToken') private readonly _userModel: Model<IUser>,
        private readonly config: ConfigService
    ) {}

    public async createUser(user: { login: string; password: string }): Promise<IUser> {
        const accessToken: string = jwt.sign(user.login, this.config.get('secret'));
        const hash: string = await bcrypt.hash(user.password, 10);
        return await this._userModel.create({ ...user, password: hash, accessToken });
    }

    // tslint:disable-next-line: no-any
    public async getUser(query: Partial<IUser>, projection: any = {}): Promise<IUser> {
        return await this._userModel.findOne(query, projection);
    }
}
