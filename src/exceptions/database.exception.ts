import { HttpException, HttpStatus, Logger } from '@nestjs/common';

export class DatabaseException extends HttpException {
  private logger = new Logger('DATABASE ERROR');
  constructor(errorMessage = 'Error de base de datos', error: any) {
    super(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
    this.logger.error(errorMessage, error);
  }
}
