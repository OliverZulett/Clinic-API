import { Module } from '@nestjs/common';
import { HealthCheckController } from './health-check.controller';
import { HealthCheckService } from './health-check.service';
import { databaseProviders } from './providers/database.provider';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [HealthCheckController],
  providers: [...databaseProviders, HealthCheckService],
})
export class HealthCheckModule {}
