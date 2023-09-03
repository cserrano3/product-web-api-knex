const Sequelize = require('sequelize');
const sequelize = require('../configs/database');


/**
 * @description Product Base class
 */
class Product extends Sequelize.Model {}

Product.init({
  description: {type: Sequelize.TEXT, allowNull: false},
  value: {type: Sequelize.FLOAT, allowNull: false},
  brand: {type: Sequelize.TEXT, allowNull: false},
}, {sequelize, modelName: 'product'}).sync({force: false});

module.exports = Product;
