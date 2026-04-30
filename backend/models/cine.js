'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cine extends Model {
    static associate(models) {
      // Cine hasMany Sala
      Cine.hasMany(models.Sala, { foreignKey: 'id_cine', as: 'salas' });
      // Cine hasMany Cartelera
      Cine.hasMany(models.Cartelera, { foreignKey: 'id_cine', as: 'carteleras' });
    }
  }
  Cine.init({
    id_cine: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: 'Clave Primaria del Cine'
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Nombre del Cine'
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Dirección física del Cine'
    },
    ciudad: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Ciudad donde se ubica'
    },
    pais: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'País del Cine'
    },
    telefono: {
      type: DataTypes.STRING,
      comment: 'Teléfono de contacto'
    }
  }, {
    sequelize,
    modelName: 'Cine',
    tableName: 'Cines',
    timestamps: true
  });
  return Cine;
};