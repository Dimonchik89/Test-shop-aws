'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      basket.belongsTo(models.user)
      basket.hasMany(models.basket_device)
    }
  }
  basket.init({
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'basket',
  });
  return basket;
};