import { Lesson } from './lesson.dto';
import { Field, ID, Int, ObjectType, registerEnumType } from 'type-graphql';
import { User } from 'src/user/dto/user.dto';

@ObjectType()
export class Schedular {
    @Field(_type => ID)
    public _id: string;
    @Field(_type => [User])
    public users: [User];
    @Field(_type => [Lesson])
    public mon?: Lesson[];
    @Field(_type => [Lesson])
    public tue?: Lesson[];
    @Field(_type => [Lesson])
    public wen?: Lesson[];
    @Field(_type => [Lesson])
    public thu?: Lesson[];
    @Field(_type => [Lesson])
    public fri?: Lesson[];
    @Field(_type => [Lesson])
    public sat?: Lesson[];
}

@ObjectType()
export class SchedularMutations {
    @Field(_type => Schedular)
    public createEmptySchedular: Schedular;
    // @Field(_type => Schedular, { nullable: true })
    // public createSchedular: Schedular;
}
