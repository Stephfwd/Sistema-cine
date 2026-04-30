'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sala extends Model {
    static associate(models) {
      // Sala belongsTo Cine
      Sala.belongsTo(models.Cine, { foreignKey: 'id_cine', as: 'cine' });
      // Sala belongsTo TipoSala
      Sala.belongsTo(models.TipoSala, { foreignKey: 'id_tipo_sala', as: 'tipo_sala' });
      // Sala hasMany Funcion
      Sala.hasMany(models.Funcion, { foreignKey: 'id_sala', as: 'funciones' });
      // Sala hasMany Asiento
      Sala.hasMany(models.Asiento, { foreignKey: 'id_sala', as: 'asientos' });
    }
  }
  Sala.init({
    id_sala: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: 'ID único de la sala'
    },
    id_cine: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'FK al Cine al que pertenece la sala'
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Nombre identificador de la sala'
    },
    capacidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'Capacidad máxima de personas'
    },
    id_tipo_sala: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'FK al tipo de sala'
    }
  }, {
    sequelize,
    modelName: 'Sala',
    tableName: 'Salas',
    timestamps: true
  });
  return Sala;
};