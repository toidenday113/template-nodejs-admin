/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('courses', table=>{
    table.increments('id').primary().notNullable();
    table.string('name', 255).notNullable();
    table.float('price').notNullable();
    table.string('thumbnail', 255).notNullable();
    table.text('descriptoon', 'mediumtext').nullable();
    table.text('content','longtext').nullable();
    table.integer('categoryId').notNullable();
    table.timestamp('deleted_at').nullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('courses');
};
