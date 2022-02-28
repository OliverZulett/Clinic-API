import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InsurancesService } from './insurances.service';
import { CreateInsuranceDto } from './dto/create-insurance.dto';
import { UpdateInsuranceDto } from './dto/update-insurance.dto';
import {
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Insurance } from './dto/insurance';
import { InsuranceIdValidatorPipe } from '../../pipes/validations/insurance-id-validator.pipe';

@ApiTags('Insurances')
@Controller('insurances')
export class InsurancesController {
  constructor(private readonly insurancesService: InsurancesService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Insurance creado con exito',
    type: Insurance,
  })
  @ApiInternalServerErrorResponse({
    description: 'Error de base de datos',
  })
  create(@Body() createInsuranceDto: CreateInsuranceDto) {
    return this.insurancesService.create(createInsuranceDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'Insurances encontrados con exito',
    type: Insurance,
    isArray: true,
  })
  @ApiInternalServerErrorResponse({
    description: 'Error de base de datos',
  })
  findAll() {
    return this.insurancesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Insurance encontrado con exito',
    type: Insurance,
  })
  @ApiNotFoundResponse({
    description: 'Insurance no encontrado',
  })
  @ApiInternalServerErrorResponse({
    description: 'Error de base de datos',
  })
  findOne(@Param('id', new InsuranceIdValidatorPipe()) id: string) {
    return this.insurancesService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'Insurance actualizado con exito',
    type: Insurance,
  })
  @ApiNotFoundResponse({
    description: 'Insurance no encontrado',
  })
  @ApiInternalServerErrorResponse({
    description: 'Error de base de datos',
  })
  update(
    @Param('id', new InsuranceIdValidatorPipe()) id: string,
    @Body() updateInsuranceDto: UpdateInsuranceDto,
  ) {
    return this.insurancesService.update(id, updateInsuranceDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Insurance eliminado con exito',
    type: Insurance,
  })
  @ApiNotFoundResponse({
    description: 'Insurance no encontrado',
  })
  @ApiInternalServerErrorResponse({
    description: 'Error de base de datos',
  })
  remove(@Param('id', new InsuranceIdValidatorPipe()) id: string) {
    return this.insurancesService.remove(id);
  }
}
