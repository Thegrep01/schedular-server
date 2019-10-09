import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { IUser } from '../schemas/user.schema';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class UserService {
    public constructor(
        @Inject('UserModelToken') private readonly _userModel: Model<IUser>,
        private readonly config: ConfigService
    ) {}

    // tslint:disable-next-line: no-any
    public async createUser(user: { login: string; password: string }): Promise<any> {
        const accessToken: string = jwt.sign(user.login, this.config.get('secret'));
        const hash: string = await bcrypt.hash(user.password, 10);
        const newUser: IUser = await this._userModel.create({ ...user, password: hash });
        delete newUser.password;
        return { ...newUser, accessToken };
    }

    // tslint:disable-next-line: no-any
    public async login({ login, password }): Promise<any> {
        const user: IUser = await this.getUser({ login });
        if (!user || (user && !(await bcrypt.compare(password, user.password as string)))) {
            throw Error('Invalid username or password');
        }
        const accessToken: string = jwt.sign(user.login, this.config.get('secret'));
        return { ...user, accessToken };
    }

    // tslint:disable-next-line: no-any
    public async getUser(query: Partial<IUser>, projection: any = {}): Promise<IUser> {
        return await this._userModel.findOne(query, projection);
    }
}
