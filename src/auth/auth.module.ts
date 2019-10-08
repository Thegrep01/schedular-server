import { AuthService } from './service/aut.service';
import { Module } from '@nestjs/common';
import { authProviders } from './auth.providers';
import { DatabaseModule } from '../common/database/database.module';
import { RecipeResolver } from './aut.resolver';

@Module({
    imports: [DatabaseModule],
    providers: [...authProviders, RecipeResolver, AuthService],
    exports: [],
})
export class AuthModule {}
