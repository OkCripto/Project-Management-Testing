import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const pool = new pg.Pool({ 
  host: 'pm-rds.ce3goiimm4y7.us-east-1.rds.amazonaws.com',
  port: 5432,
  user: 'postgres',
  password: 'wndwfn99ra',
  database: 'projectmanagement',
  ssl: {
    rejectUnauthorized: false
  }
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export default prisma;
