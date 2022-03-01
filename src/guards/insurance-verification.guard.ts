import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CreatePatientDto } from 'src/resources/patients/dto/create-patient.dto';
import { InsurancesService } from '../resources/insurances/insurances.service';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class InsuranceVerificationGuard implements CanActivate {
  constructor(private readonly insuranceService: InsurancesService) {}

  async canActivate(context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    const bodyRequest: CreatePatientDto = request.body;
    if (bodyRequest.insuranceId) {
      if (!isValidObjectId(bodyRequest.insuranceId)) {
        throw new BadRequestException('Insurance id invalido');
      }
      await this.insuranceService.findOne(bodyRequest.insuranceId);
    }
    return true;
  }
}
