import { User, UserInput } from './dto/user.dto';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { CurrentUser, GqlAuthGuard } from 'src/common/gqlAuth';
import { UserService } from './service/user.service';

@Resolver(_of => User)
export class UserResolver {
    public constructor(private readonly userService: UserService) {}

    @Query(_returns => User)
    @UseGuards(GqlAuthGuard)
    public async getUser(@CurrentUser() login) {
        return await this.userService.getUser({ login });
    }

    @Mutation(_returns => User)
    public async signUp(@Args('user') user: UserInput) {
        return await this.userService.createUser(user);
    }

    @Mutation(_returns => User)
    public async login(@Args('user') user: UserInput) {
        return await this.userService.login(user);
    }
}
