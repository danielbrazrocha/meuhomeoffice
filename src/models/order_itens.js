'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_Itens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      //One Order_Itens belongs to one Order_Details
      Order_Itens.belongsTo(models.Order_Details, {
        // novamente o atributo sera criado automaticamente pelo sequelize
        // basta referenciar no migration de Order_Itens
        foreignKey: "order_id",
        onDelete: 'CASCADE'
      });

      // //One Order_Itens belongs to one Product
      // Order_Itens.belongsTo(models.Product, {
      //   // novamente o atributo sera criado automaticamente pelo sequelize
      //   // basta referenciar no migration de Order_Itens
      //   foreignKey: "ProductId",
      //   onDelete: 'CASCADE'
      // });
    }
  }
  Order_Itens.init({
  }, {
    sequelize,
    modelName: 'Order_Itens',
  });
  return Order_Itens;
};