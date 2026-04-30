'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pelicula extends Model {
    static associate(models) {
      // Pelicula hasMany Funcion
      Pelicula.hasMany(models.Funcion, { foreignKey: 'id_pelicula', as: 'funciones' });
    }
  }
  Pelicula.init({
    id_pelicula: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: 'ID único de la película'
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Título original de la película'
    },
    duracion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'Duración en minutos'
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Género cinematográfico'
    },
    clasificacion_edad: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Clasificación por edad (A, B, C, etc.)'
    },
    descripcion: {
      type: DataTypes.TEXT,
      comment: 'Breve resumen o sinopsis'
    },
    fecha_estreno: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: 'Fecha de estreno oficial'
    }
  }, {
    sequelize,
    modelName: 'Pelicula',
    tableName: 'Peliculas',
    timestamps: true
  });
  return Pelicula;
};