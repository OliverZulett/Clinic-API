import { Connection } from "mongoose";
import { InsuranceSchema } from '../schemas/insurance.schema';
import { Logger } from '@nestjs/common';

const logger = new Logger('INSURANCE PROVIDER');

export const insuranceProviders = [
  {
    provide: 'INSURANCE_MODEL',
    useFactory: (connection: Connection) => {
      try {
        return connection.model('INSURANCES', InsuranceSchema);
      } catch (error) {
        logger.error('Error al cargar el insurance model', error);
      }
    },
    inject: ['MONGODB_CONNECTION']
  }
]