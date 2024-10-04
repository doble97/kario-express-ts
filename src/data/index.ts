import { createPool, Pool } from "mariadb";
import dotenv from 'dotenv';

dotenv.config();
const pool:Pool = createPool({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    connectionLimit: 5
});

export default pool;