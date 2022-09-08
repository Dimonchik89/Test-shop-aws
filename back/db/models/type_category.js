'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class type_category extends Model {

    static associate(models) {
    }
  }
  type_category.init({
  }, {
    sequelize,
    modelName: 'type_category',
  });
  return type_category;
};