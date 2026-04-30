'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Funcion extends Model {
    static associate(models) {
      // Funcion belongsTo Pelicula
      Funcion.belongsTo(models.Pelicula, { foreignKey: 'id_pelicula', as: 'pelicula' });
      // Funcion belongsTo Sala
      Funcion.belongsTo(models.Sala, { foreignKey: 'id_sala', as: 'sala' });
      // Funcion belongsTo Cartelera
      Funcion.belongsTo(models.Cartelera, { foreignKey: 'id_cartelera', as: 'cartelera' });
      // Funcion hasMany Entrada
      Funcion.hasMany(models.Entrada, { foreignKey: 'id_funcion', as: 'entradas' });
    }
  }
  Funcion.init({
    id_funcion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: 'ID único de la función'
    },
    id_pelicula: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'FK a la película'
    },
    id_sala: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'FK a la sala'
    },
    id_cartelera: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'FK a la cartelera'
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: 'Fecha de la función'
    },
    hora_inicio: {
      type: DataTypes.TIME,
      allowNull: false,
      comment: 'Hora de inicio'
    },
    hora_fin: {
      type: DataTypes.TIME,
      allowNull: false,
      comment: 'Hora estimada de fin'
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      comment: 'Precio base de la función'
    }
  }, {
    sequelize,
    modelName: 'Funcion',
    tableName: 'Funciones',
    timestamps: true
  });
  return Funcion;
};