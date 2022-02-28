import { ApiProperty } from "@nestjs/swagger";

export class Patient {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;
  
  @ApiProperty()
  surname: string;
  
  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;
  
  @ApiProperty()
  age: number;
  
  @ApiProperty()
  address: string;
  
  @ApiProperty()
  createdAt: Date;
  
  @ApiProperty()
  updatedAt: Date;
}