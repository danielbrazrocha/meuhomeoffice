'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_Address.init({
    idUser: DataTypes.INTEGER,
    description: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    details: DataTypes.STRING,
    CEP: DataTypes.STRING,
    country: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User_Address',
  });
  return User_Address;
};