'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_Details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order_Details.belongsTo(models.User, {
        // novamente o atributo sera criado automaticamente pelo sequelize
        // basta referenciar no migration de Order_Details
        foreignKey: "UserId",
        onDelete: 'CASCADE'
      });

      Order_Details.hasOne(models.Payment_Details, {
        // o atributo sera criado automaticamente no modelo Payment_Details não precisando ser referenciado no model)
        // apenas no migration
        foreignKey: 'order_id',
        onDelete: 'CASCADE'
      });

      Order_Details.hasMany(models.Order_Itens, {
        // o atributo sera criado automaticamente no modelo Order_Itens não precisando ser referenciado no model
        // apenas no migration
        foreignKey: 'order_id',
        onDelete: 'CASCADE'
      });

    }
  }
  Order_Details.init({
    idUser: DataTypes.INTEGER,
    idPayment: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order_Details',
    freezeTableName: true
  });
  return Order_Details;
};