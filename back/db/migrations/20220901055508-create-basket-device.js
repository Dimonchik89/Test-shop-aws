'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('basket_devices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      basketId: {
        type: Sequelize.INTEGER
      },
      deviceId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('basket_devices');
  }
};