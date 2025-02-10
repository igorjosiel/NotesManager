import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('notes', (table) => {
    table.foreign('user_id')
         .references('id')
         .inTable('users')
         .withKeyName('fk_notes_users')
         .onDelete('RESTRICT')
         .onUpdate('RESTRICT');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('notes', (table) => {
    table.dropForeign('user_id');
  });
}
