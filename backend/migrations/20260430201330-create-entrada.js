'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Entradas', {
      id_entrada: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_funcion: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Funciones',
          key: 'id_funcion'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_asiento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Asientos',
          key: 'id_asiento'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      estado: {
        allowNull: false,
        type: Sequelize.STRING
      },
      precio_final: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
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
    await queryInterface.dropTable('Entradas');
  }
};