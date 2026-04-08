import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client.js";

const adapter = new PrismaMariaDb({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'last',
  port: 3306
});

const prisma = new PrismaClient({ adapter });

export {prisma};