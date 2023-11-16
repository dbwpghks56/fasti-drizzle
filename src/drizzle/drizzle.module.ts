import { Module } from '@nestjs/common';
import {Pool} from 'pg';
import {drizzle} from 'drizzle-orm/node-postgres';
import * as schema from './schema';
import { PG_CONNECTION } from 'src/constants';

@Module({
    providers: [{
        provide: PG_CONNECTION,
        useFactory: async () => {
            const connectionString = '';
            const pool = new Pool({
                connectionString,
                ssl: false,
            });

            return drizzle(pool, { schema });
        }
    }],
    exports: [PG_CONNECTION]
})
export class DrizzleModule {}
