const {body, param, checkExact} = require('express-validator');

const bodyValidator = () => {
  return [
    body('description')
        .exists()
        .withMessage('\'description\' is required'),
    body('value')
        .exists()
        .withMessage('\'value\' is required')
        .bail()
        .isFloat()
        .withMessage('\'value\' must be float type'),
    body('brand')
        .exists()
        .withMessage(' \'brand\' is required'),
    checkExact(),
  ];
};

const paramsValidator = () => {
  return [
    param('productId')
        .exists()
        .isNumeric()
        .withMessage('\'productId\ must be an int'),
  ];
};

const validate = (method) => {
  switch (method) {
    case 'createProduct': {
      return [
        bodyValidator(),
      ];
    }
    case 'getProductById':
    case 'deleteProduct': {
      return [
        paramsValidator(),
      ];
    }
    case 'updateProduct': {
      return [
        paramsValidator(),
        bodyValidator(),
      ];
    }
  }
};

module.exports = validate;
