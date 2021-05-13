export function up(knex) {
  return knex.schema.createTable('book', (table) => {
    table.string('id').primary();
    table.string('name');
    table.integer('year');
    table.string('author');
    table.string('summary');
    table.string('publisher');
    table.integer('pageCount');
    table.integer('readPage');
    table.boolean('finished');
    table.boolean('reading');
    table.timestamp('insertedAt').default(knex.fn.now());
    table.timestamp('updatedAt').default(knex.fn.now());
  });
}

export function down(knex) {
  return knex.schema.dropTableIfExists('book');
}
