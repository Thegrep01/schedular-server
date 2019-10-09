import { Field, ID, InputType, ObjectType } from 'type-graphql';
import { Schedular } from './schedular.dto';

@ObjectType()
export class User {
    @Field(_type => ID)
    public _id!: string;
    @Field()
    public login!: string;
    @Field({ nullable: true })
    public password?: string;
    @Field()
    public accessToken!: string;
    @Field(_type => Schedular)
    public schedular: Schedular;
}
@InputType('user')
export class UserInput {
    @Field()
    public login: string;
    @Field()
    public password: string;
}
