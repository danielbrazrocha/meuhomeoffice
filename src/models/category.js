'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Product, {
        // o atributo sera criado automaticamente no modelo Product não precisando ser referenciado no model
        // apenas no migration
        foreignKey: 'category_id',
        onDelete: 'CASCADE'
      });
    }
  }
  Category.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Category',
    freezeTableName: true
  });
  return Category;
};