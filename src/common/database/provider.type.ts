import { Connection, Document, Model } from 'mongoose';

export interface IProviders {
    provide: string;
    useFactory: (connection: Connection) => Model<Document>;
    inject: string[];
}
