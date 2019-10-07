export class LessonDto {
    public readonly name?: string;
    public readonly dayIndex?: number;
    public readonly teacher?: string;
    public readonly type?: LessonType;
    public readonly classRoom?: string;
    public readonly index?: number;
}

export enum LessonType {
    lecture,
    practice,
}
