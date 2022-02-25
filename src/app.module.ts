import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { HealthCheckModule } from './resources/health-check/health-check.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        '.prod.env', '.test.env', '.env'
      ]
    }),
    DatabaseModule,
    HealthCheckModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
