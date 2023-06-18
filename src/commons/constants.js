import dotenv from 'dotenv'

const enviroment = process.env.NODE_ENV || 'local';

dotenv.config({ path: `.env.${enviroment}` });

export const { PORT } = process.env
export const { MYSQL_USER } = process.env
export const { MYSQL_PASSWORD } = process.env
export const { MYSQL_HOST } = process.env
export const { MYSQL_DATABASE } = process.env
export const { MYSQL_N_CONNECTIONS } = process.env
