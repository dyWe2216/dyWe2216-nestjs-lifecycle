import { NestFactory } from '@nestjs/core';
import { GlobalDto } from './app.dto';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './commons/exception.filter';
import { GlobalGuard } from './commons/guard';
import { GlobalInterceptor } from './commons/interceptor';
import { globalMiddleware } from './commons/middleware';
import { GlobalPipe } from './commons/pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(globalMiddleware);
  app.useGlobalGuards(new GlobalGuard);
  app.useGlobalInterceptors(new GlobalInterceptor);
  app.useGlobalPipes(new GlobalPipe)
  app.useGlobalFilters(new GlobalExceptionFilter);

  await app.listen(3000);
}

bootstrap();
