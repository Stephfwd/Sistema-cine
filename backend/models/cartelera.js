'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cartelera extends Model {
    static associate(models) {
      // Cartelera belongsTo Cine
      Cartelera.belongsTo(models.Cine, { foreignKey: 'id_cine', as: 'cine' });
      // Cartelera hasMany Funcion
      Cartelera.hasMany(models.Funcion, { foreignKey: 'id_cartelera', as: 'funciones' });
    }
  }
  Cartelera.init({
    id_cartelera: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: 'ID único de la cartelera'
    },
    id_cine: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'FK al Cine correspondiente'
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: 'Fecha de inicio de vigencia de la cartelera'
    },
    fecha_fin: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: 'Fecha de fin de vigencia'
    }
  }, {
    sequelize,
    modelName: 'Cartelera',
    tableName: 'Carteleras',
    timestamps: true
  });
  return Cartelera;
};