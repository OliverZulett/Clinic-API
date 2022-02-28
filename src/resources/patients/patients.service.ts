import { Inject, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PatientEntity } from './entities/patient.entity';
import { DatabaseException } from '../../exceptions/database.exception';

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
      throw new DatabaseException('Error al crear paciente en la DB', error);
    }
  }

  async findAll() {
    try {
      return await this.patientRepository.find();
    } catch (error) {
      throw new DatabaseException('Error al buscar pacientes en la DB', error);
    }
  }

  async findOne(id: string) {
    let patientFound = null;
    try {
      patientFound = await this.patientRepository.findOne(id);
    } catch (error) {
      throw new DatabaseException('Error al buscar el paciente en la DB', error);
    }
    if (patientFound) {
      return patientFound;
    } else {
      throw new NotFoundException('Paciente no encontrado');
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
      throw new DatabaseException('Error al actualizar el paciente en la DB', error);
    }
  }

  async remove(id: string) {
    const patientFound = await this.findOne(id);
    try {
      await this.patientRepository.remove(patientFound);
    } catch (error) {
      throw new DatabaseException('Error al eliminar el paciente en la DB', error);
    }
  }
}
