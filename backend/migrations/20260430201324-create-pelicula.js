'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Peliculas', {
      id_pelicula: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      duracion: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      genero: {
        allowNull: false,
        type: Sequelize.STRING
      },
      clasificacion_edad: {
        allowNull: false,
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.TEXT
      },
      fecha_estreno: {
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
    await queryInterface.dropTable('Peliculas');
  }
};