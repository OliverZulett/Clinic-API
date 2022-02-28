import {
  ArgumentMetadata,
  Injectable,
  NotAcceptableException,
  PipeTransform,
} from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class InsuranceIdValidatorPipe implements PipeTransform {
  constructor(private errorMessage = 'Insurance id invalido') {}

  transform(insuranceId: string, metadata: ArgumentMetadata) {
    if (isValidObjectId(insuranceId)) {
      return insuranceId;
    } else {
      throw new NotAcceptableException(this.errorMessage);
    }
  }
}
