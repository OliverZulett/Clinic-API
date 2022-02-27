import { IsAlpha, IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, Max, Min } from "class-validator";

export class CreatePatientDto {
  @IsNotEmpty({
    message: 'El nombre es requerido'
  })
  @IsAlpha('en-US', {
    message: 'El nombre solo debe contener letras, el valor actual es: $value'
  })
  name: string;
  
  @IsNotEmpty({
    message: 'El nombre es apellido'
  })
  @IsAlpha('en-US', {
    message: 'El apellido solo debe contener letras, el valor actual es: $value'
  })
  surname: string;
  
  @IsNotEmpty({
    message: 'El telefono es requerido'
  })
  @IsString({
    message: 'El telefono es invalido'
  })
  phone: string;

  @IsNotEmpty({
    message: 'El email es requerido'
  })
  @IsEmail({}, {
    message: 'El email es invalido, el valor actual es: $value'
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
  age: number;
  
  @IsOptional()
  @IsString({
    message: 'La direccion es invalida'
  })
  address: string;
}
