'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mesa = sequelize.define('Mesa', {
    idMesa: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true,
    },
    numerodemesa: DataTypes.STRING(50),
    capacidad: DataTypes.STRING(50),
    descripcion: DataTypes.STRING(50),
  },// {schema: 'public'}
  );
  Mesa.associate = (models) =>{
    Mesa.hasMany(models.Reserva,{
      foreignKey: 'idMesa'
    });
  };
  return Mesa;
};

