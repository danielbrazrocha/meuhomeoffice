'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment_Details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payment_Details.belongsTo(models.Order_Details, {
        // novamente o atributo sera criado automaticamente pelo sequelize
        // basta referenciar no migration de Payment_Details
        foreignKey: "order_id",
        onDelete: 'CASCADE'
      });
    }
  }
  Payment_Details.init({
    amount: DataTypes.FLOAT,
    provider: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Payment_Details',
  });
  return Payment_Details;
};