import { LessonDto } from './lesson.dto';

export class DayDto {
    public readonly index!: number;
    public readonly lessons?: LessonDto[];
}
