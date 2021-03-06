'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.createTable('Users', {
        id: {
          type: Sequelize.STRING(191),
          unique:true,
          primaryKey: true,
        },
        password: {
          type: Sequelize.STRING(191)
        },
        name: {
          type: Sequelize.STRING(191)
        },
        isSeller: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        deletedAt: {
          type: Sequelize.DATE
        }
      }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
      }),
    ])

  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
