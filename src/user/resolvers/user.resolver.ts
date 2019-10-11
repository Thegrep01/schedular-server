import { User } from '../dto/user.dto';
import { Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { CurrentUser, GqlAuthGuard } from 'src/common/gqlAuth';
import { UserService } from '../service/user.service';

@Resolver(_of => User)
@UseGuards(GqlAuthGuard)
export class UserResolver {
    public constructor(private readonly userService: UserService) {}

    @Query(_returns => User)
    public async user(@CurrentUser() login) {
        return await this.userService.getUser({ login }, { password: 0, accessToken: 0 });
    }
}
