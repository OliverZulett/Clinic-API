import { Module } from '@nestjs/common';
import { InsurancesService } from './insurances.service';
import { InsurancesController } from './insurances.controller';
import { DatabaseModule } from '../../database/database.module';
import { insuranceProviders } from './providers/insurance.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [InsurancesController],
  providers: [...insuranceProviders, InsurancesService],
})
export class InsurancesModule {}
