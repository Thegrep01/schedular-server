import { Schedular } from './../dto/schedular.dto';
import { UserService } from './../../user/service/user.service';
import { Args, Context, Info, Mutation, Query, ResolveProperty, Resolver, Root, Parent } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/common/gqlAuth';
import { SchedularMutations } from '../dto/schedular.dto';
import { SchedularService } from '../service/schedular.service';
import * as mongoose from 'mongoose';
import { User } from 'src/user/dto/user.dto';
@Resolver(_of => SchedularMutations)
@UseGuards(GqlAuthGuard)
export class SchedularMutationResolver {
    public constructor(private schedularService: SchedularService) {}

    @Mutation(_returns => SchedularMutations, { nullable: true })
    public async schedular() {
        return {};
    }

    @ResolveProperty(_returns => Schedular)
    public async createEmptySchedular() {
        return await this.schedularService.createSchedular();
    }
}
@Resolver(_of => Schedular)
@UseGuards(GqlAuthGuard)
export class SchedularResolver {
    public constructor(private schedularService: SchedularService, private userService: UserService) {}

    @Query(_returns => Schedular, { nullable: true })
    public async schedular(@Args('userId') userId: string) {
        return await this.schedularService.getSchedular(userId);
    }

    @ResolveProperty(_returns => [User])
    public async users(@Parent() root: Schedular) {
        return this.userService.getUsers({ _id: { $in: root.users } });
    }
}
