import * as mongoose from 'mongoose';

export const schedularSchema: mongoose.Schema = new mongoose.Schema({
    mon: {
        type: [String],
    },
    tue: {
        type: [String],
    },
    wen: {
        type: [String],
    },
    thu: {
        type: [String],
    },
    fri: {
        type: [String],
    },
    sat: {
        type: [String],
    },
    users: {
        type: [String],
    },
});

export interface ISchedular extends mongoose.Document {
    _id: String;
    // tslint:disable-next-line:no-any
    [x: string]: any;
}
