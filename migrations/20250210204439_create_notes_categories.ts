import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('notes_categories', (table) => {
    table.uuid('id').primary();
    table.uuid('note_id').unsigned().notNullable();
    table.uuid('category_id').unsigned().notNullable();
    table.foreign('note_id')
         .references('id')
         .inTable('notes')
         .onDelete('RESTRICT')
         .onUpdate('RESTRICT');
    table.foreign('category_id')
         .references('id')
         .inTable('categories')
         .onDelete('RESTRICT')
         .onUpdate('RESTRICT');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('notes_categories');
}
