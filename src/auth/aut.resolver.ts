import { AuthService } from './service/aut.service';
import { User, UserInput } from './dto/user.dto';
import * as mongoose from 'mongoose';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/common/gqlAuth';

@Resolver(_of => User)
export class RecipeResolver {
    public constructor(private readonly authService: AuthService) {}

    @Query(_returns => User)
    public async user(@Args('userId') userId: string) {
        return await this.authService.getUser({ _id: mongoose.Types.ObjectId(userId) });
    }

    @Mutation(_returns => User)
    public async signUp(@Args('user') user: UserInput) {
        return await this.authService.createUser(user);
    }
}
