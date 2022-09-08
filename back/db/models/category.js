'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    
    static associate(models) {
      category.hasMany(models.product)
      category.belongsToMany(models.type, { through: models.type_category })
    }
  }
  category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category',
  });
  return category;
};