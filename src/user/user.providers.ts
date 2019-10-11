import { Connection, Document, Model } from 'mongoose';
import { userSchema } from './schemas/user.schema';
import { IProviders } from 'src/common/database/provider.type';

export const userProviders: IProviders[] = [
    {
        provide: 'UserModelToken',
        useFactory: (connection: Connection): Model<Document> => connection.model('UserModel', userSchema),
        inject: ['DbConnectionToken'],
    },
];
