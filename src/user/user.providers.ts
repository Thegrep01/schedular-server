import { Connection, Document, Model } from 'mongoose';
import { userSchema } from './schemas/user.schema';

export const userProviders: IUserProviders[] = [
    {
        provide: 'UserModelToken',
        useFactory: (connection: Connection): Model<Document> => connection.model('UserModel', userSchema),
        inject: ['DbConnectionToken'],
    },
];

interface IUserProviders {
    provide: string;
    useFactory: (connection: Connection) => Model<Document>;
    inject: string[];
}
