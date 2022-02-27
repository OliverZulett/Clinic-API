import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { patientProviders } from './providers/patient.provider';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PatientsController],
  providers: [
    ...patientProviders,
    PatientsService
  ]
})
export class PatientsModule {}
