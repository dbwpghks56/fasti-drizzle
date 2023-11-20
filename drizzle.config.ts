import type { Config } from 'drizzle-kit';

export default {
    schema: './src/drizzle/schema.ts',
    out: "./src/drizzle",
    driver: 'pg',
    dbCredentials: {
        host: "svc.sel5.cloudtype.app",
        port: 32119,
        user: "root",
        password: "mydb123",
        database: "postgres",
    }
} satisfies Config;