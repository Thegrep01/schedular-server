import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { IUser } from '../schemas/user.schema';

@Injectable()
export class AuthService {
    public constructor(@Inject('UserModelToken') private readonly _userModel: Model<IUser>) {}

    public async createUser(user: { login: string; password: string }): Promise<IUser> {
        return await this._userModel.create(user);
    }
    public async getUser(query: Partial<IUser>): Promise<IUser> {
        return await this._userModel.findOne(query);
    }
}
