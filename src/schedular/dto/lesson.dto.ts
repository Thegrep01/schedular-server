import { Field, ID, InputType, Int, ObjectType, registerEnumType } from 'type-graphql';

@ObjectType()
export class Lesson {
    @Field(_type => ID)
    public _id: string;
    @Field()
    public name: string;
    @Field()
    public teacher: string;
    @Field(_type => LESSON_TYPE)
    public type: LESSON_TYPE;
    @Field()
    public classRoom: string;
    @Field(_type => Int)
    public index?: number;
}

enum LESSON_TYPE {
    Practice,
    Lecture,
}

registerEnumType(LESSON_TYPE, {
    name: 'LESSON_TYPE',
});

@ObjectType()
export class LessonMutations {
    @Field(_type => Lesson, { nullable: true })
    public create: Lesson;
}

@InputType()
export class LessonInput {
    @Field()
    public name: string;
    @Field()
    public teacher: string;
    @Field(_type => LESSON_TYPE)
    public type: LESSON_TYPE;
    @Field()
    public classRoom: string;
    @Field(_type => Int)
    public index: number;
    @Field({ nullable: true })
    public schedularId: string;
}
