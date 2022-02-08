'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      //One Cart_Item belongs to one Shopping_Session
      Cart_Item.belongsTo(models.Shopping_Session, {
        // novamente o atributo sera criado automaticamente pelo sequelize
        // basta referenciar no migration de Cart_Item
        foreignKey: "session_id",
        onDelete: 'CASCADE'
      });

      // //One Cart_Item belongs to one Product
      // Cart_Item.belongsTo(models.Product, {
      //   // novamente o atributo sera criado automaticamente pelo sequelize
      //   // basta referenciar no migration de Cart_Item
      //   foreignKey: "ProductId",
      //   onDelete: 'CASCADE'
      // });
      
    }
  }
  Cart_Item.init({
    // idShoppingSession: DataTypes.INTEGER,
    // idProduct: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart_Item',
  });
  return Cart_Item;
};