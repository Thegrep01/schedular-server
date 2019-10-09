import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Lesson {
    @Field({ nullable: true })
    public name?: string;
    @Field({ nullable: true })
    public teacher?: string;
    @Field(_type => Int, { nullable: true })
    public type?: number;
    @Field({ nullable: true })
    public classRoom: string;
    @Field(_type => Int, { nullable: true })
    public index?: number;
    @Field(_type => Int, { nullable: true })
    public dayIndex?: number;
}


@ObjectType()
export class Schedular {
    @Field(_type => [Lesson], { nullable: true })
    public mon?: Lesson[];
    @Field(_type => [Lesson], { nullable: true })
    public tue?: Lesson[];
    @Field(_type => [Lesson], { nullable: true })
    public wen?: Lesson[];
    @Field(_type => [Lesson], { nullable: true })
    public thu?: Lesson[];
    @Field(_type => [Lesson], { nullable: true })
    public fri?: Lesson[];
    @Field(_type => [Lesson], { nullable: true })
    public sat?: Lesson[];
}
