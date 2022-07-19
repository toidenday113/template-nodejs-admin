/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function(knex) {
  return knex.schema.createTable("users", table=>{
    table.increments('id').notNullable().primary();
    table.string('firstName', 255).nullable();
    table.string('lastName', 255).nullable();
    table.string('email', 255).nullable();
    table.string('username', 255).notNullable();
    table.string('password', 40).notNullable();
    table.string('token', 255).nullable();
    table.string('avatar', 255).nullable();
    table.integer('usergroup',10).nullable();
    table.string('active', 255).nullable();
    table.timestamp('deleted_at').nullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
