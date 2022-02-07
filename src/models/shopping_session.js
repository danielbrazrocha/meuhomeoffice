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