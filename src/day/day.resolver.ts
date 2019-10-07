import { Query, Resolver, ResolveProperty, Parent } from '@nestjs/graphql';
import { DaysService } from './service/day.service';
import { DayDto } from './dto/day.dto';
import { LessonDto } from './dto/lesson.dto';
import { LessonService } from './service/lesson.service';

@Resolver('Day')
export class DayResolver {
    public constructor(private readonly daysService: DaysService, private readonly lessonService: LessonService) {}

    @Query('days')
    public async getDays(): Promise<DayDto[]> {
        return this.daysService.getAll();
    }

    @ResolveProperty('lessons')
    public async getLessons(@Parent() day: DayDto): Promise<LessonDto[]> {
        const { index } = day;
        return this.lessonService.getAll({ index });
    }
}
