import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { HealthCheckModule } from './resources/health-check/health-check.module';
import { PatientsModule } from './resources/patients/patients.module';
import { InsurancesModule } from './resources/insurances/insurances.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        '.prod.env', '.test.env', '.env'
      ]
    }),
    DatabaseModule,
    HealthCheckModule,
    PatientsModule,
    InsurancesModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
