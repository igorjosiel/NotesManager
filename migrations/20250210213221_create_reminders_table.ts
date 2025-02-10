import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('reminders', (table) => {
    table.uuid('id').primary();
    table.text('description').nullable();
    table.timestamp('reminder_time').notNullable();
    table.timestamps(true, true);
    table.uuid('note_id').unsigned().notNullable();
    table.foreign('note_id')
         .references('id')
         .inTable('notes')
         .onDelete('RESTRICT')
         .onUpdate('RESTRICT');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('reminders');
}
