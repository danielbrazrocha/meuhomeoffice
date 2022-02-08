'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Inventory.hasMany(models.Product, {
        // o atributo sera criado automaticamente no modelo Product não precisando ser referenciado no model
        // apenas no migration
        foreignKey: 'inventory_id',
        onDelete: 'CASCADE'
      });
    }
  }
  Inventory.init({
    quantity: DataTypes.INTEGER,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Inventory',
  });
  return Inventory;
};