import { Module } from '@nestjs/common';
import { AutoScanModule } from './AutoScanModule';

@Module({
  imports: [AutoScanModule.scan()],
})
export class AppModule { }
