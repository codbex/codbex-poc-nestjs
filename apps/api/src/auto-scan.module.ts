/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Module, DynamicModule, Type } from '@nestjs/common';
import * as glob from 'glob';
import { join } from 'path';

@Module({})
export class AutoScanModule {
  static async scan(): Promise<DynamicModule> {
    const root = join(__dirname, '../../..'); // adjust to repo root if needed

    const controllerFiles = glob.sync(
      join(root, 'packages/**/src/*.controller.{ts,js}')
    );
    const serviceFiles = glob.sync(
      join(root, 'packages/**/src/*.service.{ts,js}')
    );

    console.log(`controllerFiles: ${controllerFiles}`);
    const controllers: Type<any>[] = await Promise.all(controllerFiles.map(async (f) => {
      const mod = await import(f);
      return mod.default || Object.values(mod)[0];
    }));

    const providers: Type<any>[] = await Promise.all(serviceFiles.map(async (f) => {
      const mod = await import(f);
      return mod.default || Object.values(mod)[0];
    }));

    return {
      module: AutoScanModule,
      controllers,
      providers,
      exports: providers,
    };
  }
}
