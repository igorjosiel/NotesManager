import knex from 'knex';
import 'dotenv/config';

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE URL env not found!");
}

export const config = {
  client: process.env.DATABASE_CLIENT,
  connection: {
    filename: process.env.DATABASE_URL
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './migrations',
  }
}

export const DB = knex(config);
