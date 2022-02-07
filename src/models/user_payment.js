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
    }
  }
  User_Payment.init({
    idUser: DataTypes.INTEGER,
    payment_type: DataTypes.STRING,
    provider: DataTypes.STRING,
    account_number: DataTypes.INTEGER,
    expiry: DataTypes.STRING,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User_Payment',
  });
  return User_Payment;
};