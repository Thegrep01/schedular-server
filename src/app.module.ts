import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from './config/config.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        ConfigModule,
        AuthModule,
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gql',
            context: ({ req }) => ({ headers: req.headers }),
        }),
    ],
})
export class AppModule {}
