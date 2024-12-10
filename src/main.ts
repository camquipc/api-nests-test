import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );


  const configService = app.get(ConfigService);

  app.setGlobalPrefix('api/v1');


  await app.listen(configService.get('PORT'));

  console.log(`Application running on: ${await app.getUrl()}`);
}
bootstrap();
