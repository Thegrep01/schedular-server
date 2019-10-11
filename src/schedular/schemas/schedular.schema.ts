import { ILesson } from './lesson.schema';
import * as mongoose from 'mongoose';

export const schedularSchema: mongoose.Schema = new mongoose.Schema({
    mon: {
        type: [mongoose.Types.ObjectId],
    },
    tue: {
        type: [mongoose.Types.ObjectId],
    },
    wen: {
        type: [mongoose.Types.ObjectId],
    },
    thu: {
        type: [mongoose.Types.ObjectId],
    },
    fri: {
        type: [mongoose.Types.ObjectId],
    },
    sat: {
        type: [mongoose.Types.ObjectId],
    },
});

export interface ISchedular extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    // tslint:disable-next-line:no-any
    [x: string]: any;
}
