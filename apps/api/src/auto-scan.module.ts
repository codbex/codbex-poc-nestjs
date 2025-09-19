/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// packages/auto-scan/src/auto-scan.module.ts
import { Module, DynamicModule, Type } from '@nestjs/common';
import * as glob from 'glob';
import { join } from 'path';

@Module({})
export class AutoScanModule {
  static scan(): DynamicModule {
    const root = join(__dirname, '../../..'); // adjust to repo root if needed

    const controllerFiles = glob.sync(
      join(root, 'packages/**/src/*.controller.{ts,js}')
    );
    const serviceFiles = glob.sync(
      join(root, 'packages/**/src/*.service.{ts,js}')
    );

    console.log(`controllerFiles: ${controllerFiles}`);
    const controllers: Type<any>[] = controllerFiles.map((f) => {
      const mod = require(f);
      return mod.default || Object.values(mod)[0];
    });

    const providers: Type<any>[] = serviceFiles.map((f) => {
      const mod = require(f);
      return mod.default || Object.values(mod)[0];
    });

    return {
      module: AutoScanModule,
      controllers,
      providers,
      exports: providers,
    };
  }
}
