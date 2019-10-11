import * as mongoose from 'mongoose';

export const lessonSchema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
    },
    teacher: {
        type: String,
    },
    type: {
        type: Number,
    },
    classRoom: {
        type: String,
    },
    index: {
        type: Number,
    },
});

export interface ILesson extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    // tslint:disable-next-line:no-any
    [x: string]: any;
}
