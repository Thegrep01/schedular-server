import { Connection, Document, Model } from 'mongoose';
import { IProviders } from 'src/common/database/provider.type';
import { schedularSchema } from './schemas/schedular.schema';
import { lessonSchema } from './schemas/lesson.schema';

export const schedularProviders: IProviders[] = [
    {
        provide: 'SchedularModelToken',
        useFactory: (connection: Connection): Model<Document> => connection.model('SchedularModel', schedularSchema),
        inject: ['DbConnectionToken'],
    },
    {
        provide: 'LessonModelToken',
        useFactory: (connection: Connection): Model<Document> => connection.model('LessonModel', lessonSchema),
        inject: ['DbConnectionToken'],
    },
];
