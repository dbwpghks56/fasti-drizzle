import { Module } from '@nestjs/common';
import {Pool} from 'pg';
import {drizzle} from 'drizzle-orm/node-postgres';
import * as schema from './schema';
import { PG_CONNECTION } from 'src/constants';

@Module({
    providers: [{
        provide: PG_CONNECTION,
        useFactory: async () => {
            const pool = new Pool({
                host: "svc.sel5.cloudtype.app",
                port: 32119,
                user: "root",
                password: "mydb123",
                database: "postgres",
            });
            const client = await pool.connect();
            const db = drizzle(client, { schema: schema, logger: true, });
            console.log("dfasdf ", db);
            
            return db;
        }
    }],
    exports: [PG_CONNECTION]
})
export class DrizzleModule {}
