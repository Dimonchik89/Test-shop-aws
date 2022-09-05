'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class device_info extends Model {
    
    static associate(models) {
      device_info.belongsTo(models.device)
    }
  }
  device_info.init({
    deviceId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'device_info',
  });
  return device_info;
};