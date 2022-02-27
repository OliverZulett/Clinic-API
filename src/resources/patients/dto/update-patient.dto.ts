import { PartialType } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { CreatePatientDto } from './create-patient.dto';

export class UpdatePatientDto extends PartialType(CreatePatientDto) {
  @IsOptional()
  name: string;

  @IsOptional()
  surname: string;

  @IsOptional()
  phone: string;

  @IsOptional()
  email: string;
  
  @IsOptional()
  age: number;
}
