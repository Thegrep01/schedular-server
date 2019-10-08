import { Field, ID, InputType, ObjectType } from 'type-graphql';

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
    // @Field({ nullable: true })
    // public schedularID?: string;
}

@InputType('user')
export class UserInput {
    @Field()
    public login: string;
    @Field()
    public password: string;
}
