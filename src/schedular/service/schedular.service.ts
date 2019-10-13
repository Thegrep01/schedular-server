import { Schedular } from './../dto/schedular.dto';
import { ISchedular } from './../schemas/schedular.schema';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';

@Injectable()
export class SchedularService {
    public constructor(@Inject('SchedularModelToken') private readonly _schedularModel: Model<ISchedular>) {}

    public async createSchedular(schedular: Schedular | {} = {}): Promise<ISchedular> {
        return await this._schedularModel.create(schedular);
    }
    // tslint:disable-next-line: no-any
    public async getSchedular(userId: string): Promise<any> {
        return await this._schedularModel
            .findOne({ users: userId })
            .lean()
            .exec();
    }
}
