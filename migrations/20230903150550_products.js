/**
 * @description up migration
 * @param {object} knex
 * @return  {Promise<void>}
 */
exports.up = function(knex) {
  knex.schema.dropTable('products');
  return knex.schema.createTable('products', (table) => {
    table.increments('id').primary();
    table.string('description').notNullable();
    table.float('value').notNullable();
    table.string('brand').notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param {object} knex
 * @return { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('products');
};
