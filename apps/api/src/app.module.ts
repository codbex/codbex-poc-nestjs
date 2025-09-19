// apps/api/src/app.module.ts
import { Module } from '@nestjs/common';
import { AutoScanModule } from './auto-scan.module'; // use TS path alias or relative path

@Module({
  imports: [
    AutoScanModule.scan(), // Dynamically load all vertical controllers/services
  ],
})
export class AppModule {}
