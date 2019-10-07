import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { DayModule } from './day/day.module';

@Module({
    imports: [
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
            context: ({ req }) => ({ headers: req.headers }),
        }),
        DayModule,
    ],
})
export class AppModule {}
