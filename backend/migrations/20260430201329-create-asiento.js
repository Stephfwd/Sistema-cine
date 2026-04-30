'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Asientos', {
      id_asiento: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_sala: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Salas',
          key: 'id_sala'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      fila: {
        allowNull: false,
        type: Sequelize.STRING
      },
      numero: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      tipo: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Asientos');
  }
};