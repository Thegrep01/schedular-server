import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/database/database.module';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';
import { JwtStrategy } from './passport/jwt.strategy';
import { userProviders } from './user.providers';
import { UserService } from './service/user.service';
import { resolvers } from './resolvers';

const config: ConfigService = new ConfigService(`environments/${process.env.NODE_ENV || 'development'}.env`);
const secret: string = config.get('secret');
@Module({
    imports: [DatabaseModule, ConfigModule],
    providers: [...userProviders, ...resolvers, UserService, JwtStrategy],
})
export class UserModule {}
