import * as mongoose from 'mongoose';

export const userSchema: mongoose.Schema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: false,
    },
    // accessToken: {
    //     type: String,
    //     required: true,
    // },
    // schedularID: {
    //     type: String,
    //     required: false,
    // },
});

// tslint:disable-next-line:interface-name
interface User {
    readonly login: string;
    password?: string;
    // readonly accessToken: string;
    // schedularID?: string;
}

export interface IUser extends mongoose.Document, User {
    _id: mongoose.Types.ObjectId;
    // tslint:disable-next-line:no-any
    [x: string]: any;
}
