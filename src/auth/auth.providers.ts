import { Connection, Document, Model } from 'mongoose';
import { userSchema } from './schemas/user.schema';

export const authProviders: IAuthProviders[] = [
    {
        provide: 'UserModelToken',
        useFactory: (connection: Connection): Model<Document> => connection.model('UserModel', userSchema),
        inject: ['DbConnectionToken'],
    },
];

interface IAuthProviders {
    provide: string;
    useFactory: (connection: Connection) => Model<Document>;
    inject: string[];
}
