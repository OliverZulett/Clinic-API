import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1');
  if (process.env.NODE_ENV === 'development') {
    const config = new DocumentBuilder()
      .setTitle('Clinic API')
      .setDescription('Clinic REST API')
      .setVersion('1.0')
      .addTag('HealthCheck', 'endpoint encargado de verificar el status de la API')
      .addTag('Patients', 'Endpoints del recurso pacientes')
      .addTag('Insurances', 'Endpoints del recurso aseguradoras')
      .addBasicAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.API_PORT);
}
bootstrap();
