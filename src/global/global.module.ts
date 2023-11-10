import { Global, Module } from '@nestjs/common';
import { DbProvider, DrizzleDBProvider } from './provider/db.provider';

@Global()
@Module({
    providers: [
        DbProvider
    ],
    exports: [DrizzleDBProvider]
})
export class GlobalModule {}
