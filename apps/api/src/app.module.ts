import { Module } from '@nestjs/common';
import { AutoScanModule } from './auto-scan.module';

@Module({
  imports: [AutoScanModule.scan()],
})
export class AppModule { }
