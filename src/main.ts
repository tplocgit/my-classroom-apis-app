import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
  console.log(`Just a API app`);
}
bootstrap();
