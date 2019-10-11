import { Lesson } from './lesson.dto';
import { Field, ID, Int, ObjectType, registerEnumType } from 'type-graphql';
import { User } from 'src/user/dto/user.dto';

@ObjectType()
export class Schedular {
    @Field(_type => ID)
    public _id: string;
    @Field(_type => User)
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
