const Router = require('express').Router;
const router = new Router();

const validate = require('../../middlewares/validator');
const ProductController = require('../../controllers/productController');

router.route('/')
    .get(ProductController.getProducts)
    .post(validate('createProduct'), ProductController.createProduct);

router.route('/:productId')
    .get(validate('getProductById'), ProductController.getProductById)
    .put(validate('updateProduct'), ProductController.updateProduct)
    .delete(validate('deleteProduct'), ProductController.deleteProduct);


module.exports = router;
