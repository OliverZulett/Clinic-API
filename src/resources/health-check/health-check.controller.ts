import { Controller, Get } from '@nestjs/common';
import { ApiInternalServerErrorResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { HealthCheckService } from './health-check.service';

@ApiTags('HealthCheck')
@Controller('health-check')
export class HealthCheckController {
  constructor(private readonly healthCheckService: HealthCheckService) {}

  @Get()
  @ApiOkResponse({
    description: 'Estado de la API es saludable'
  })
  @ApiInternalServerErrorResponse({
    description: 'Error interno de la api'
  })
  getHealth() {
    return this.healthCheckService.checkHeatlh();
  }
}
