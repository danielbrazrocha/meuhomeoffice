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
      
      //One User_Address belongs to one User
      User_Address.belongsTo(models.User, {
        // novamente o atributo sera criado automaticamente pelo sequelize
        // basta referenciar no migration de User_Address
        foreignKey: "UserId",
        onDelete: 'CASCADE'
      });
    }
  }
  User_Address.init({
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