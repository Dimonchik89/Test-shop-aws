'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {

    static associate(models) {
      product.hasMany(models.product_info, { as: "info" })
      product.belongsTo(models.type)
      product.belongsTo(models.category)
    }
  }
  product.init({
    name: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    img: DataTypes.STRING,
    typeId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};