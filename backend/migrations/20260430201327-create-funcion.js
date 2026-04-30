'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Funciones', {
      id_funcion: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_pelicula: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Peliculas',
          key: 'id_pelicula'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
      id_cartelera: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Carteleras',
          key: 'id_cartelera'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      fecha: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      hora_inicio: {
        allowNull: false,
        type: Sequelize.TIME
      },
      hora_fin: {
        allowNull: false,
        type: Sequelize.TIME
      },
      precio: {
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
    await queryInterface.dropTable('Funciones');
  }
};