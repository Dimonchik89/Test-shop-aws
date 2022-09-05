'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class brand extends Model {
    
    static associate(models) {
      brand.hasMany(models.device)
      brand.belongsToMany(models.type, { through: models.type_brand })
    }
  }
  brand.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'brand',
  });
  return brand;
};