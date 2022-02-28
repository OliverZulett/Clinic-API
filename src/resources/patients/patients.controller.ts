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
import { ApiCreatedResponse, ApiInternalServerErrorResponse, ApiTags, ApiOkResponse, ApiNotFoundResponse, ApiNotAcceptableResponse } from '@nestjs/swagger';
import { Patient } from './dto/patient';

@ApiTags('Patients')
@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Paciente creado con exito',
    type: Patient
  })
  @ApiInternalServerErrorResponse({
    description: 'Error de base de datos'
  })
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'Pacientes encontrados con exito',
    type: Patient,
    isArray: true
  })
  @ApiInternalServerErrorResponse({
    description: 'Error de base de datos'
  })
  findAll() {
    return this.patientsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Paciente encontrado con exito',
    type: Patient
  })
  @ApiNotAcceptableResponse({
    description: 'Id de paciente invalido'
  })
  @ApiNotFoundResponse({
    description: 'Paciente no encontrado'
  })
  @ApiInternalServerErrorResponse({
    description: 'Error de base de datos'
  })
  findOne(
    @Param('id', new PatientIdValidatorPipe())
    id: string,
  ) {
    return this.patientsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'Paciente actualizado con exito',
    type: Patient
  })
  @ApiNotAcceptableResponse({
    description: 'Id de paciente invalido'
  })
  @ApiNotFoundResponse({
    description: 'Paciente no encontrado'
  })
  @ApiInternalServerErrorResponse({
    description: 'Error de base de datos'
  })
  update(
    @Param('id', new PatientIdValidatorPipe())
    id: string,
    @Body() updatePatientDto: UpdatePatientDto,
  ) {
    return this.patientsService.update(id, updatePatientDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Paciente eliminado con exito',
    type: Patient
  })
  @ApiNotAcceptableResponse({
    description: 'Id de paciente invalido'
  })
  @ApiNotFoundResponse({
    description: 'Paciente no encontrado'
  })
  @ApiInternalServerErrorResponse({
    description: 'Error de base de datos'
  })
  remove(
    @Param('id', new PatientIdValidatorPipe())
    id: string,
  ) {
    return this.patientsService.remove(id);
  }
}
