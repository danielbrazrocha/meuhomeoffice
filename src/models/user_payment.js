'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_Payment.belongsTo(models.User, {
        // novamente o atributo sera criado automaticamente pelo sequelize
        // basta referenciar no migration de User_Address
        foreignKey: "UserId",
        onDelete: 'CASCADE'
      });
    }
  }
  User_Payment.init({
    payment_type: DataTypes.STRING,
    provider: DataTypes.STRING,
    account_number: DataTypes.INTEGER,
    expiry: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User_Payment',
  });
  return User_Payment;
};