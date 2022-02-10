'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Discount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Discount.hasMany(models.Product, {
        // o atributo sera criado automaticamente no modelo Product não precisando ser referenciado no model
        // apenas no migration
        foreignKey: 'discount_id',
        onDelete: 'CASCADE'
      });
    }
  }
  Discount.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    discount_percent: DataTypes.FLOAT,
    active: DataTypes.BOOLEAN,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Discount',
  });
  return Discount;
};