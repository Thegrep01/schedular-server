import { LessonType } from './../dto/lesson.dto';
import { LessonDto } from '../dto/lesson.dto';

export class LessonService {
    private mock: LessonDto[] = [
        { name: 'Lorem Ipsum', dayIndex: 1, teacher: 'Lorem', type: LessonType.lecture, classRoom: '6/52', index: 1 },
        {
            name: 'Lorem Ipsum 2',
            dayIndex: 2,
            teacher: 'Lorem',
            type: LessonType.practice,
            classRoom: '6/52',
            index: 2,
        },
        {
            name: 'Lorem Ipsum dolor 3',
            dayIndex: 4,
            teacher: 'Lorem',
            type: LessonType.lecture,
            classRoom: '6/52',
            index: 1,
        },
        {
            name: 'Lorem Ipsum dolor 3',
            dayIndex: 4,
            teacher: 'Lorem',
            type: LessonType.practice,
            classRoom: '6/52',
            index: 2,
        },
    ];
    // tslint:disable-next-line: no-any
    public async getAll(query?: any): Promise<LessonDto[]> {
        const { index } = query;
        if (index) {
            return this.mock
                .filter((item: LessonDto) => item.dayIndex)
                .filter((item: LessonDto) => item.dayIndex === index);
        }

        return [];
    }
}
