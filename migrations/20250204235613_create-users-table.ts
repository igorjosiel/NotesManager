import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.uuid('id').primary();
    table.string('name', 255).notNullable();
    table.string('nickname', 100).nullable().unique();
    table.string('email').notNullable();
    table.boolean('is_active').defaultTo(true);
    table.integer('age').notNullable();
    table.dateTime('date_of_birth').notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}
