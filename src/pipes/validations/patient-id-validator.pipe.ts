import {
  ArgumentMetadata,
  Injectable,
  NotAcceptableException,
  ParseUUIDPipe,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class PatientIdValidatorPipe implements PipeTransform {
  constructor(private errorMessage = 'Patient id es invalido') {}

  async transform(patientId: string, metadata: ArgumentMetadata) {
    const uuidPipe = new ParseUUIDPipe();
    try {
      return await uuidPipe.transform(patientId, metadata);
    } catch (error) {
      throw new NotAcceptableException(this.errorMessage);
    }
  }
}
