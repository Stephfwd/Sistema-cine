'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entrada extends Model {
    static associate(models) {
      // Entrada belongsTo Funcion
      Entrada.belongsTo(models.Funcion, { foreignKey: 'id_funcion', as: 'funcion' });
      // Entrada belongsTo Asiento
      Entrada.belongsTo(models.Asiento, { foreignKey: 'id_asiento', as: 'asiento' });
    }
  }
  Entrada.init({
    id_entrada: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: 'ID único de la entrada'
    },
    id_funcion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'FK a la función'
    },
    id_asiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'FK al asiento'
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Estado de la entrada (Vendida, Reservada)'
    },
    precio_final: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      comment: 'Precio final cobrado'
    }
  }, {
    sequelize,
    modelName: 'Entrada',
    tableName: 'Entradas',
    timestamps: true
  });
  return Entrada;
};