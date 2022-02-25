import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class HealthCheckService {
  constructor(
    @Inject('POSTGRES_CONNECTION_STATUS')
    private readonly postgresDBConnectionStatus: boolean,
  ) {}

  checkHeatlh() {
    return {
      api_status: `I'm Alive`,
      postgres_status: this.postgresDBConnectionStatus
        ? 'CONNECTED'
        : 'DISCONNECTED',
    };
  }
}
