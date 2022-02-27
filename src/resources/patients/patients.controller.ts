import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  NotAcceptableException,
} from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PatientIdValidatorPipe } from 'src/pipes/validations/patient-id-validator.pipe';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }

  @Get()
  findAll() {
    return this.patientsService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', new PatientIdValidatorPipe())
    id: string,
  ) {
    return this.patientsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new PatientIdValidatorPipe())
    id: string,
    @Body() updatePatientDto: UpdatePatientDto,
  ) {
    return this.patientsService.update(id, updatePatientDto);
  }

  @Delete(':id')
  remove(
    @Param('id', new PatientIdValidatorPipe())
    id: string,
  ) {
    return this.patientsService.remove(id);
  }
}
