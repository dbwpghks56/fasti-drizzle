import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { PG_CONNECTION } from 'src/constants';
import * as schema from '../drizzle/schema';

@Injectable()
export class UsersService {
    constructor(
        @Inject(PG_CONNECTION) private conn: NodePgDatabase<typeof schema>,
    ) {
        
    }

    async findAll() {
        
        return await this.conn.query.users.findMany();
    }
}
