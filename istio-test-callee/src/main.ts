import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const exitApp = () => {
    app.close().catch((reason) => console.log(reason));
  };
  process.on('SIGINT', exitApp);
  process.on('SIGTERM', exitApp);

  await app.listen(3000);
}

bootstrap();
