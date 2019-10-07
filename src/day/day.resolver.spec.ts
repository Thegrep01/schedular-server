import { DayResolver } from './day.resolver';
import { DaysService } from './service/day.service';
import { LessonService } from './service/lesson.service';
import { async } from 'rxjs/internal/scheduler/async';
import { LessonType } from './dto/lesson.dto';

describe('DayController', () => {
    let dayResolver: DayResolver;
    let daysService: DaysService;
    let lessonService: LessonService;

    beforeEach(() => {
        daysService = new DaysService();
        lessonService = new LessonService();
        dayResolver = new DayResolver(daysService, lessonService);
    });

    describe('getAll', () => {
        it('should return an array of days', async () => {
            const result = [{ index: 1 }];
            jest.spyOn(daysService, 'getAll').mockImplementation(async () => result);

            expect(await dayResolver.getDays()).toBe(result);
        });
    });

    describe('getLessons', () => {
        it('should return an array of lessons', async () => {
            const result = [
                {
                    name: 'Lorem Ipsum dolor 3',
                    dayIndex: 4,
                    teacher: 'Lorem',
                    type: LessonType.lecture,
                    classRoom: '6/52',
                    index: 1,
                },
            ];
            jest.spyOn(lessonService, 'getAll').mockImplementation(async () => result);

            expect(await dayResolver.getLessons({ index: 4 })).toBe(result);
        });

        it('should return an empty array if any matching objects', async () => {
            const result = [];
            jest.spyOn(lessonService, 'getAll').mockImplementation(async () => result);

            expect(await dayResolver.getLessons({ index: 1 })).toBe(result);
        });
    });
});
