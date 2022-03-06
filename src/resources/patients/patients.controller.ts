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
  Query,
  UseGuards,
} from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PatientIdValidatorPipe } from 'src/pipes/validations/patient-id-validator.pipe';
import { ApiCreatedResponse, ApiInternalServerErrorResponse, ApiTags, ApiOkResponse, ApiNotFoundResponse, ApiNotAcceptableResponse, ApiBasicAuth, ApiQuery } from '@nestjs/swagger';
import { Patient } from './dto/patient';
import { InsuranceVerificationGuard } from '../../guards/insurance-verification.guard';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Patients')
@ApiBasicAuth()
@UseGuards(AuthGuard('basic'))
@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  @UseGuards(InsuranceVerificationGuard)
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
  @ApiQuery({
    name: 'name',
    required: false
  })
  @ApiQuery({
    name: 'surname',
    required: false
  })
  @ApiOkResponse({
    description: 'Pacientes encontrados con exito',
    type: Patient,
    isArray: true
  })
  @ApiInternalServerErrorResponse({
    description: 'Error de base de datos'
  })
  async findAll(
    @Query('name') name?: string,
    @Query('surname') surname?: string
  ) {
    if (name) {
      return await this.patientsService.findAllFilterByName(name);
    }
    if (surname) {
      return this.patientsService.findAllFilterByQuery('surname', surname);
    }
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
  @UseGuards(InsuranceVerificationGuard)
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
