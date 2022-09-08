'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_info extends Model {
    
    static associate(models) {
      product_info.belongsTo(models.product)
    }
  }
  product_info.init({
    productId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product_info',
  });
  return product_info;
};