import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        AuthModule,
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gql',
            context: ({ req }) => ({ req }),
        }),
    ],
})
export class AppModule {}
