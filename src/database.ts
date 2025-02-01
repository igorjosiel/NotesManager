import knex from 'knex';
import 'dotenv/config';

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE URL env not found!");
}

export const DB = knex({
  client: process.env.DATABASE_CLIENT,
  connection: {
    filename: process.env.DATABASE_URL
  }
});
