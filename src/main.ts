import { NestFactory } from '@nestjs/core';
import { AutoScanModule } from './AutoScanModule';

async function bootstrap() {
  const autoScanModule = await AutoScanModule.scan();
  const app = await NestFactory.create(autoScanModule);
  await app.listen(3000);
}
bootstrap();
