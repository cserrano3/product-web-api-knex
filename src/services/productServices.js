const ProductRepository = require('../repositories/productRepository');

/**
 * @description Saves a new product entry into DB
 * @param {object} product
 */
async function createProduct(product) {
  try {
    return await ProductRepository.create(product);
  } catch (error) {
    throw error;
  }
}

/**
 * @description Retrive all products from repository
 */
async function getProducts() {
  try {
    return await ProductRepository.getAll();
  } catch (error) {
    throw error;
  }
}

/**
 * @description Retrieved a product entry by a given Id
 * @param {number} productId
 */
async function getProductById(productId) {
  try {
    return await ProductRepository.getById(productId);
  } catch (error) {
    throw error;
  }
}

/**
 * @description Update a product given by id
 * @param {number} productId
 * @param {object} newProduct
 * @return {object} updatedProduct
 * @throw {Error} error
 */
async function updateProduct(productId, newProduct) {
  try {
    await ProductRepository.update(productId, newProduct);

    return await ProductRepository.getById(productId);
  } catch (error) {
    throw error;
  }
}

/**
 * @description Delete a product given by id
 * @param {number} productId
 * @return {object} {message: string, hasBeenDeleted: boolean}
 * @throws {Error} error if deletion failed
 */
async function deleteProduct(productId) {
  try {
    await ProductRepository.remove(productId);
    return {
      message: `product for id ${productId} deleted successfully`,
      hasBeenDeleted: true,
    };
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
