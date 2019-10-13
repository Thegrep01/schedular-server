import { LessonMutationResolver } from './lesson.resolver';
import { SchedularMutationResolver, SchedularResolver } from './schedular.resolver';

// tslint:disable-next-line: no-any
export const schedularResolvers: any[] = [LessonMutationResolver, SchedularMutationResolver, SchedularResolver];
