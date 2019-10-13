import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/database/database.module';
import { schedularProviders } from './schedular.providers';
import { schedularResolvers } from './resolvers';
import { services } from './service';

@Module({
    imports: [DatabaseModule, UserModule],
    providers: [...schedularProviders, ...schedularResolvers, ...services],
})
export class SchedularModule {}
