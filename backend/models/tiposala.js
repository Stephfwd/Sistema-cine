'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoSala extends Model {
    static associate(models) {
      // TipoSala hasMany Sala
      TipoSala.hasMany(models.Sala, { foreignKey: 'id_tipo_sala', as: 'salas' });
    }
  }
  TipoSala.init({
    id_tipo_sala: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: 'ID único del tipo de sala'
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Nombre del tipo de sala (2D, 3D, IMAX, etc.)'
    },
    descripcion: {
      type: DataTypes.STRING,
      comment: 'Descripción de las características de la sala'
    }
  }, {
    sequelize,
    modelName: 'TipoSala',
    tableName: 'TipoSalas',
    timestamps: true
  });
  return TipoSala;
};