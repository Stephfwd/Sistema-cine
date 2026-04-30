'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Salas', {
      id_sala: {
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
      nombre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      capacidad: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      id_tipo_sala: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'TipoSalas',
          key: 'id_tipo_sala'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('Salas');
  }
};