'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class type extends Model {
    
    static associate(models) {
      type.hasMany(models.device)
      type.belongsToMany(models.brand, { through: models.type_brand})
    }
  }
  type.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'type',
  });
  return type;
};