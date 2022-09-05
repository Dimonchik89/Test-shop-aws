'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class type_brand extends Model {

    static associate(models) {
    }
  }
  type_brand.init({
  }, {
    sequelize,
    modelName: 'type_brand',
  });
  return type_brand;
};