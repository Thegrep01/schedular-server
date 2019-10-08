import { AuthService } from './service/aut.service';
import { Module } from '@nestjs/common';
import { authProviders } from './auth.providers';
import { DatabaseModule } from '../common/database/database.module';
import { RecipeResolver } from './aut.resolver';
import { ConfigModule } from 'src/config/config.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from 'src/config/config.service';
import { JwtStrategy } from './passport/jwt.strategy';

const config: ConfigService = new ConfigService(`environments/${process.env.NODE_ENV || 'development'}.env`);
const secret: string = config.get('secret');
@Module({
    imports: [DatabaseModule, ConfigModule],
    providers: [...authProviders, RecipeResolver, AuthService, JwtStrategy],
})
export class AuthModule {}
