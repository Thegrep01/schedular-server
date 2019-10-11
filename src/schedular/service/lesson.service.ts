import { ILesson } from './../schemas/lesson.schema';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { LessonInput } from '../dto/lesson.dto';

@Injectable()
export class LessonService {
    public constructor(@Inject('LessonModelToken') private readonly _lessonModel: Model<ILesson>) {}

    public async createLesson(lesson: LessonInput): Promise<ILesson> {
        return this._lessonModel.create(lesson);
    }
}
