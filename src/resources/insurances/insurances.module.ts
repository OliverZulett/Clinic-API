import { Module } from '@nestjs/common';
import { InsurancesService } from './insurances.service';
import { InsurancesController } from './insurances.controller';
import { DatabaseModule } from '../../database/database.module';
import { insuranceProviders } from './providers/insurance.provider';
import { patientProviders } from '../patients/providers/patient.provider';
import { PatientsService } from '../patients/patients.service';

@Module({
  imports: [DatabaseModule],
  controllers: [InsurancesController],
  providers: [
    ...insuranceProviders, 
    ...patientProviders,
    InsurancesService,
    PatientsService
  ],
  exports: [InsurancesService]
})
export class InsurancesModule {}
