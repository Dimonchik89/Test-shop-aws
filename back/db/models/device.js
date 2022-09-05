'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class device extends Model {

    static associate(models) {
      device.hasMany(models.device_info, { as: "info" })
      device.belongsTo(models.type)
      device.belongsTo(models.brand)
    }
  }
  device.init({
    name: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    img: DataTypes.STRING,
    typeId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'device',
  });
  return device;
};