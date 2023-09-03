/**
 * @param {object} knex
 * @return { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.delete
  await knex('products').insert([
    {description: 'Cream Craker', value: 3.8, brand: 'Aimorés'},
    {description: 'Sorvete de pistache', value: 88.7, brand: 'kibon'},
  ]);
};
