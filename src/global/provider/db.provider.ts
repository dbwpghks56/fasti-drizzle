import { FactoryProvider, Logger } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import {Pool} from 'pg';
import { DefaultLogger, LogWriter } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/node-postgres';
import { PgDatabase } from 'drizzle-orm/pg-core';

export const DrizzleDBProvider = 'DbProvider';
export const DbType = PgDatabase;

export const DbProvider: FactoryProvider = {
    provide: DrizzleDBProvider,
    useFactory: () => {

        const pool = new Pool({
            host: "localhost",
            port: 5432,
            user: "myuser",
            password: "mypassword",
            database: "postgress",
        });

        return drizzle(pool);
    },
    
};