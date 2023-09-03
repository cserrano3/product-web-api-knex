const {validationResult} = require('express-validator');
const lodash = require('lodash');

const ProductService = require('../services/productServices');

/**
 * @description Create a product
 * @param {object} req
 * @param {object} res
 * @return {object} product created
 */
async function createProduct(req, res) {
  if (lodash.isEmpty(req.body)) {
    return res.status(400).send({error: 'body must not be empty'});
  }

  const errors = validationResult(req.body);

  if (!errors.isEmpty()) {
    return res.status(422).send({errors: errors.array()});
  }

  try {
    const createdProduct = await ProductService.createProduct(req.body);

    return res.status(200).json(createdProduct);
  } catch (error) {
    return res.status(500).send({error: error.message});
  }
}

/**
 * @description Get all products
 * @param {object} req
 * @param {object} res
 * @return {Array} all products found
 */
async function getProducts(req, res) {
  try {
    const products = await ProductService.getProducts();
    if (!products.length) {
      return res.status(404).send({error: 'products not found'});
    }
    return res.status(200).json({products});
  } catch (error) {
    return res.status(500).send({error: error.message});
  }
}

/**
 * @description Get a single product by id
 * @param {object} req
 * @param {object} res
 * @object {object} result for product search
 */
async function getProductById(req, res) {
  const {params: {productId}} = req;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).send({errors: errors.array()});
  }

  try {
    const product = await ProductService.getProductById(productId);

    if (!product) {
      return res.status(404).send({error: `product for ${productId} not  found`});
    }

    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).send({error: error.message});
  }
}


/**
 * @description Update a product by id
 * @param {object} req
 * @param {object} res
 * @return {object} result for product update
 */
async function updateProduct(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).send({errors: errors.array()});
  }

  try {
    const updateProduct = await ProductService.updateProduct(req.params.productId, req.body);

    if (!updateProduct) {
      return res.status(404)
          .send({error: `product for \'${req.params.productId}\' id not found to be updated`});
    }

    return res.status(200).json(updateProduct);
  } catch (error) {
    console.log(error);
    return res.status(500).send({error: error.message});
  }
}

/**
 * @description Delete a product by id
 * @param {object} req
 * @param {object} res
 * @return {object} {hasBeenDeleted: boolean, message: string}
 */
async function deleteProduct(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).send({errors: errors.array()});
  }

  try {
    const deleteResult = await ProductService.deleteProduct(req.params.productId);

    if (!deleteResult.hasBeenDeleted) {
      return res.status(404).json({...deleteResult});
    }

    return res.status(200).json({...deleteResult});
  } catch (error) {
    return res.status(500).send({error: error.message});
  }
}

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
