import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, Max, Min } from "class-validator";

export class CreatePatientDto {
  @IsNotEmpty({
    message: 'El nombre es requerido'
  })
  @IsAlpha('en-US', {
    message: 'El nombre solo debe contener letras, el valor actual es: $value'
  })
  @ApiProperty({
    required: true,
    description: 'Nombre del paciente',
    example: 'jhon'
  })
  name: string;
  
  @IsNotEmpty({
    message: 'El nombre es apellido'
  })
  @IsAlpha('en-US', {
    message: 'El apellido solo debe contener letras, el valor actual es: $value'
  })
  @ApiProperty({
    required: true,
    description: 'Apellido del paciente',
    example: 'Doe'
  })
  surname: string;
  
  @IsNotEmpty({
    message: 'El telefono es requerido'
  })
  @IsString({
    message: 'El telefono es invalido'
  })
  @ApiProperty({
    required: true,
    description: 'Telefono del paciente',
    example: '+971-4512245'
  })
  phone: string;

  @IsNotEmpty({
    message: 'El email es requerido'
  })
  @IsEmail({}, {
    message: 'El email es invalido, el valor actual es: $value'
  })
  @ApiProperty({
    required: true,
    description: 'Email del paciente',
    example: 'jhondoe@gmail.com'
  })
  email: string;
  
  @IsNotEmpty({
    message: 'El edad es requerida'
  })
  @IsInt({
    message: 'La edad debe ser un entero'
  })
  @Min(1, {
    message: 'La edad debe ser mayor a $constraint1'
  })
  @Max(90, {
    message: 'La edad debe ser menor a $constraint1'
  })
  @ApiProperty({
    required: true,
    description: 'Edad del paciente',
    example: 16,
    examples: [1, 59, 90]
  })
  age: number;
  
  @IsOptional()
  @IsString({
    message: 'La direccion es invalida'
  })
  @ApiProperty({
    required: false,
    description: 'Direccion del paciente',
    example: 'Liberty AV. nro. 265 - LA'
  })
  address: string;

  @IsOptional()
  @IsString({
    message: 'El id de insurance es invalido'
  })
  @ApiProperty({
    required: false,
    description: 'Insurance del paciente',
    example: '62158f931f44f1794654dc0a'
  })
  insuranceId: string;
}
