import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateInsuranceDto {
  @IsNotEmpty({
    message: 'El nombre de la aseguradora es requerido'
  })
  @IsString({
    message: 'El nombre de la asegura es invalido'
  })
  @ApiProperty({
    required: true,
    description: 'Nombre de la aseguradora',
    example: 'Insurance 1'
  })
  name: string;

  @IsNotEmpty({
    message: 'LA direccion de la aseguradora es requerida'
  })
  @IsString({
    message: 'La direccion de la asegura es invalida'
  })
  @ApiProperty({
    required: true,
    description: 'Direcction de la aseguradora',
    example: 'Liberty Av. nro 45 - LA'
  })
  address: string;

  @IsNotEmpty({
    message: 'El telefono de la aseguradora es requerido'
  })
  @IsString({
    message: 'El telefono de la asegura es invalido'
  })
  @ApiProperty({
    required: true,
    description: 'Telefono de la aseguradora',
    example: '+89-151024'
  })
  phone: string;

  @IsOptional()
  @IsString({
    message: 'El email de la asegura es invalido'
  })
  @ApiProperty({
    required: false,
    description: 'Email de la aseguradora',
    example: 'insurance1@gmail.com'
  })
  email: string;

  @IsOptional()
  @IsString({
    message: 'El codigo postal de la asegura es invalido'
  })
  @ApiProperty({
    required: false,
    description: 'Codigo postal de la aseguradora',
    example: '7894'
  })
  postal_code: string;
}
