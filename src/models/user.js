'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.User_Address, {
        // o atributo sera criado automaticamente no modelo User_Address não precisando ser referenciado no model
        // apenas no migration
        foreignKey: 'UserId',
        onDelete: 'CASCADE'
      });
      User.hasMany(models.User_Payment, {
        // o atributo sera criado automaticamente no modelo User_Payment não precisando ser referenciado no model
        // apenas no migration
        foreignKey: 'UserId',
        onDelete: 'CASCADE'
      });
      User.hasOne(models.Shopping_session, {
        // o atributo sera criado automaticamente no modelo Shopping_session não precisando ser referenciado no model)
        // apenas no migration
        foreignKey: 'UserId',
        onDelete: 'CASCADE'
      });

      User.hasOne(models.Order_Details, {
        // o atributo sera criado automaticamente no modelo Order_Details não precisando ser referenciado no model)
        // apenas no migration
        foreignKey: 'UserId',
        onDelete: 'CASCADE'
      });


    }
  }
  User.init({
    kind: DataTypes.STRING,
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    tel: DataTypes.STRING,
    email: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};