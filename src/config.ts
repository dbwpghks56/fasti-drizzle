import {registerAs} from '@nestjs/config';

export const Dbconfig = registerAs('db', () => ({
    prodBranchUrl : process.env.PROD_BRANCH_URL,
    devBranchURL : process.env.DEV_BRANCH_URL
}));