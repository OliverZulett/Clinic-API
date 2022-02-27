import { Inject, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PatientEntity } from './entities/patient.entity';

@Injectable()
export class PatientsService {
  private Logger = new Logger(PatientsService.name)

  constructor(
    @Inject('PATIENT_REPOSITORY')
    private readonly patientRepository: Repository<PatientEntity>,
  ) {}

  async create(createPatientDto: CreatePatientDto) {
    try {
      return await this.patientRepository.save(createPatientDto);
    } catch (error) {
      const errorMessage = 'Error al crear paciente en la DB'
      this.Logger.error(errorMessage, error);
      throw new InternalServerErrorException({
        error: errorMessage
      });
    }
  }

  async findAll() {
    try {
      return await this.patientRepository.find();
    } catch (error) {
      const errorMessage = 'Error al buscar pacientes en la DB'
      this.Logger.error(errorMessage, error);
      throw new InternalServerErrorException({
        error: errorMessage
      });
    }
  }

  async findOne(id: string) {
    let patientFound = null;
    try {
      patientFound = await this.patientRepository.findOne(id);
    } catch (error) {
      const errorMessage = 'Error al buscar el paciente en la DB'
      this.Logger.error(errorMessage, error);
      throw new InternalServerErrorException({
        error: errorMessage
      });
    }
    if (patientFound) {
      return patientFound;
    } else {
      throw new NotFoundException('Paciente no encontrado')
    }
  }

  async update(id: string, updatePatientDto: UpdatePatientDto) {
    const patientFound = await this.findOne(id);
    try {
      await this.patientRepository.update(id, {
        ...patientFound,
        ...updatePatientDto
      });
      return patientFound;
    } catch (error) {
      const errorMessage = 'Error al actualizar el paciente en la DB'
      this.Logger.error(errorMessage, error);
      throw new InternalServerErrorException({
        error: errorMessage
      });
    }
  }

  async remove(id: string) {
    const patientFound = await this.findOne(id);
    try {
      await this.patientRepository.remove(patientFound);
    } catch (error) {
      const errorMessage = 'Error al eliminar el paciente en la DB'
      this.Logger.error(errorMessage, error);
      throw new InternalServerErrorException({
        error: errorMessage
      });
    }
  }
}
