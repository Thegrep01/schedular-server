import { Module } from '@nestjs/common';
import { DayResolver } from './day.resolver';
import { DaysService } from './service/day.service';
import { LessonService } from './service/lesson.service';

@Module({
    providers: [DayResolver, DaysService, LessonService],
})
export class DayModule {}
