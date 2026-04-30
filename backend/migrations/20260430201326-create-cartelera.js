'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carteleras', {
      id_cartelera: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_cine: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Cines',
          key: 'id_cine'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      fecha_inicio: {
        allowNull: false,
        type: Sequelize.DATE
      },
      fecha_fin: {
        allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Carteleras');
  }
};