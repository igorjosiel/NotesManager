import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('notes_tags', (table) => {
    table.uuid('id').primary();
    table.uuid('note_id').unsigned().notNullable();
    table.uuid('tag_id').unsigned().notNullable();
    table.foreign('note_id')
         .references('id')
         .inTable('notes')
         .onDelete('RESTRICT')
         .onUpdate('RESTRICT');
    table.foreign('tag_id')
         .references('id')
         .inTable('tags')
         .onDelete('RESTRICT')
         .onUpdate('RESTRICT');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('notes_tags');
}
