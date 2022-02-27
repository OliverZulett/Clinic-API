import { Connection } from "typeorm";
import { PatientEntity } from '../entities/patient.entity';
import { Logger } from '@nestjs/common';

const logger = new Logger('PATIENT PROVIDER')

export const patientProviders = [
  {
    provide: 'PATIENT_REPOSITORY',
    useFactory: (connection: Connection) => {
      try {
        return connection.getRepository(PatientEntity);
      } catch (error) {
        logger.error('Error al cargar el patient repository', error);
      }
    },
    inject: ['POSTGRES_CONNECTION']
  }
]