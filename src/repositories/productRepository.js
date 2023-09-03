const db = require('../configs/database');

/**
 * @description Saves a new product entry into DB
 * @param {object} product
 */
async function create(product) {
  const [newProduct] = await db('products').insert(product, [
    'id',
    'description',
    'brand',
    'value',
  ]);

  return newProduct;
}

/**
 * @description List all products stored in the products table
 */
async function getAll() {
  return await db('products');
}

/**
 * @description Retrieved a product entry by a given id, which is the primary key
 * @param {number} productId
 */
async function getById(productId) {
  return await db('products').where('id', productId);
}

/**
 * @description Update a product given by id
 * @param {number} productId
 * @param {object} newProduct
 * @return {number} number of affected rows
 */
async function update(productId, newProduct) {
  const {description, value, brand} = newProduct;

  return await db('products').where('id', productId).update({
    description,
    value,
    brand,
  }, [
    'id',
    'description',
    'brand',
    'value',
  ]);
}

/**
 * @description Delete a product given by id
 * @param {number} productId
 * @return {object} returns deleted product
 * @throws {object} error if deletion failed
 */
async function remove(productId) {
  const deletedProduct = await db('products').where('id', productId).del();

  return deletedProduct;
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
