'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    idCategory: DataTypes.INTEGER,
    idDiscount: DataTypes.INTEGER,
    idInventory: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    SKU: DataTypes.STRING,
    price: DataTypes.FLOAT,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};