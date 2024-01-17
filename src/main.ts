import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const { json, urlencoded } = await import('express');
  const { useContainer } = await import('class-validator');
  const { ValidationPipe } = await import('@nestjs/common');
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin : process.env.ALLOWED_ORIGINS || '*',
    methods: 'GET,PUT,POST,DELETE,HEAD,PATCH',
    preflightContinue: false,
    optionsSuccessStatus: 200,
    credentials:true,
  })
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.useGlobalPipes(new ValidationPipe({ stopAtFirstError: true })); //validation
  app.use(json({ limit: '10mb' }));
  app.use(urlencoded({ extended: true, limit: '10mb' }));
  
  const PORT = 8008;
  await app.listen(PORT);
}
bootstrap();
