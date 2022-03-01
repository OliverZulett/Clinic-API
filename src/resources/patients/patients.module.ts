import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { patientProviders } from './providers/patient.provider';
import { DatabaseModule } from '../../database/database.module';
import { InsurancesModule } from '../insurances/insurances.module';

@Module({
  imports: [DatabaseModule, InsurancesModule],
  controllers: [PatientsController],
  providers: [
    ...patientProviders,
    PatientsService
  ],
  exports: [
    PatientsService
  ]
})
export class PatientsModule {}
