'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shopping_Session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //One Shopping_Session belongs to one User
      Shopping_Session.belongsTo(models.User, {
        // novamente o atributo sera criado automaticamente pelo sequelize
        // basta referenciar no migration de Shopping_Session
        foreignKey: "UserId",
        onDelete: 'CASCADE'
      });

      Shopping_Session.hasMany(models.Cart_Item, {
        // o atributo sera criado automaticamente no modelo Cart_Item não precisando ser referenciado no model
        // apenas no migration
        foreignKey: 'session_id',
        onDelete: 'CASCADE'
      });

    }
  }
  Shopping_Session.init({
    total: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Shopping_Session',
  });
  return Shopping_Session;
};