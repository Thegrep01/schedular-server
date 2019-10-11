import { Args, Mutation, ResolveProperty, Resolver } from '@nestjs/graphql';
import { AuthMutations, LoginInput, User } from '../dto/user.dto';
import { UserService } from '../service/user.service';

@Resolver(_of => AuthMutations)
export class AuthResolver {
    public constructor(private readonly userService: UserService) {}

    @Mutation(_returns => AuthMutations, { nullable: true })
    public async auth() {
        return {};
    }

    @ResolveProperty(_returns => User, { nullable: true })
    public async signUp(@Args('user') user: LoginInput) {
        return await this.userService.createUser(user);
    }

    @ResolveProperty(_returns => User, { nullable: true })
    public async login(@Args('user') user: LoginInput) {
        return await this.userService.login(user);
    }
}
