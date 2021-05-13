export function up(knex) {
  return knex.schema.alterTable('book', (table) => {
    table.boolean('finished').default(0).alter();
  });
}

export function down(knex) {
  return knex.schema.alterTable('book', (table) => {
    table.boolean('finished').alter();
  });
}
