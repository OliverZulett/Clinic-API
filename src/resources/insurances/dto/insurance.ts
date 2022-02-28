import { ApiProperty } from '@nestjs/swagger';
export class Insurance {
  @ApiProperty()
  name: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  postal_code: string;
}