import { Lesson, LessonInput, LessonMutations } from '../dto/lesson.dto';
import { Args, Mutation, ResolveProperty, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/common/gqlAuth';
import { LessonService } from '../service/lesson.service';

@Resolver(_of => LessonMutations)
@UseGuards(GqlAuthGuard)
export class LessonMutationResolver {
    public constructor(private lessonService: LessonService) {}

    @Mutation(_returns => LessonMutations, { nullable: true })
    public async lessons() {
        return {};
    }

    @ResolveProperty(_returns => Lesson, { nullable: true })
    public async create(@Args('lesson') lesson: LessonInput) {
        return await this.lessonService.createLesson(lesson);
    }
}
