'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asiento extends Model {
    static associate(models) {
      // Asiento belongsTo Sala
      Asiento.belongsTo(models.Sala, { foreignKey: 'id_sala', as: 'sala' });
      // Asiento hasMany Entrada
      Asiento.hasMany(models.Entrada, { foreignKey: 'id_asiento', as: 'entradas' });
    }
  }
  Asiento.init({
    id_asiento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: 'ID único del asiento'
    },
    id_sala: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'FK a la sala'
    },
    fila: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Fila (ej. A, B, C)'
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'Número de asiento'
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Tipo de asiento (Normal, VIP, Discapacidad)'
    }
  }, {
    sequelize,
    modelName: 'Asiento',
    tableName: 'Asientos',
    timestamps: true
  });
  return Asiento;
};