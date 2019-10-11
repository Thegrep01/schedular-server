import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/database/database.module';
import { schedularProviders } from './schedular.providers';
import { schedularResolvers } from './resolvers';
import { LessonService } from './service/lesson.service';

@Module({
    imports: [DatabaseModule],
    providers: [...schedularProviders, ...schedularResolvers, LessonService],
})
export class SchedularModule {}
