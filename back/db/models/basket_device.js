'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class basket_device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      basket_device.belongsTo(models.basket)
    }
  }
  basket_device.init({
    basketId: DataTypes.INTEGER,
    deviceId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'basket_device',
  });
  return basket_device;
};