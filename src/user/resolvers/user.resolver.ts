import { Lesson } from './../dto/schedular.dto';
import { User, UserInput } from '../dto/user.dto';
import { Args, Mutation, Query, Resolver, Root, ResolveProperty } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { CurrentUser, GqlAuthGuard } from 'src/common/gqlAuth';
import { UserService } from '../service/user.service';
import { Schedular } from '../dto/schedular.dto';

@Resolver(_of => User)
export class UserResolver {
    public constructor(private readonly userService: UserService) {}

    @Query(_returns => User)
    @UseGuards(GqlAuthGuard)
    public async user(@CurrentUser() login) {
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

    @ResolveProperty(_returns => Schedular)
    public schedular(@Root() user: User): Schedular {
        return { mon: [] };
    }
}
