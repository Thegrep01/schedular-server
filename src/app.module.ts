import { SchedularModule } from './schedular/schedular.module';
import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        UserModule,
        SchedularModule,
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gql',
            context: ({ req }) => ({ req }),
        }),
    ],
})
export class AppModule {}
