import { Field, ID, InputType, ObjectType } from 'type-graphql';
import { Schedular } from 'src/schedular/dto/schedular.dto';

@ObjectType()
export class User {
    @Field(_type => ID)
    public _id!: string;
    @Field()
    public login!: string;
    @Field({ nullable: true })
    public accessToken?: string;
}

@ObjectType()
export class AuthMutations {
    @Field(_type => User, { nullable: true })
    public login: User;
    @Field(_type => User, { nullable: true })
    public signUp: User;
}

@InputType()
export class LoginInput {
    @Field()
    public login: string;
    @Field()
    public password: string;
}
