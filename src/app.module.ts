import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { HealthCheckModule } from './resources/health-check/health-check.module';
import { PatientsModule } from './resources/patients/patients.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        '.prod.env', '.test.env', '.env'
      ]
    }),
    DatabaseModule,
    HealthCheckModule,
    PatientsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
