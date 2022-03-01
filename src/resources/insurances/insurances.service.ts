import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateInsuranceDto } from './dto/create-insurance.dto';
import { UpdateInsuranceDto } from './dto/update-insurance.dto';
import { InsuranceModel } from './interfaces/insurance.interface';
import { Model } from 'mongoose';
import { DatabaseException } from '../../exceptions/database.exception';
import { PatientsService } from '../patients/patients.service';

@Injectable()
export class InsurancesService {
  constructor(
    @Inject('INSURANCE_MODEL')
    private readonly insuranceModel: Model<InsuranceModel>,
    private readonly patientsService: PatientsService
  ) {}

  async create(createInsuranceDto: CreateInsuranceDto) {
    try {
      return await this.insuranceModel.create(createInsuranceDto);
    } catch (error) {
      throw new DatabaseException('Error al crear insurance en la DB', error);
    }
  }

  async findAll() {
    try {
      return await this.insuranceModel.find();
    } catch (error) {
      throw new DatabaseException('Error al buscar insurances en la DB', error);
    }
  }

  async findPatientsByInsuranceId(id: string) {
    return await this.patientsService.findAllByInsuranceId(id);
  }

  async findOne(id: string) {
    let insuranceFound = null;
    try {
      insuranceFound = await this.insuranceModel.findById(id);
    } catch (error) {
      throw new DatabaseException('Error al buscar el insurance en la DB', error);
    }
    if (insuranceFound) {
      return insuranceFound;
    } else {
      throw new NotFoundException('Insurance no encontrado');
    }
  }

  async update(id: string, updateInsuranceDto: UpdateInsuranceDto) {
    const insuranceFound = this.findOne(id);
    try {
      await this.insuranceModel.findByIdAndUpdate(id, updateInsuranceDto);
      return insuranceFound;
    } catch (error) {
      throw new DatabaseException('Error al actualizar el insurance en la DB', error);
    }
  }

  async remove(id: string) {
    await this.findOne(id);
    try {
      await this.insuranceModel.findByIdAndDelete(id);
    } catch (error) {
      throw new DatabaseException('Error al eliminar el insurance en la DB', error);
    }
  }
}
