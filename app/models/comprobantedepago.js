'use strict';
module.exports = (sequelize, DataTypes) => {
  const ComprobanteDePago = sequelize.define('ComprobanteDePago', {
    idComprobanteDePago: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true,
    },
    fecha: DataTypes.DATEONLY,
    hora: DataTypes.TIME,
    subtotal: DataTypes.STRING,
    total: DataTypes.STRING,
    idFormaDePago: DataTypes.INTEGER,
    idOrdenOnline: DataTypes.INTEGER,
    idReserva: DataTypes.INTEGER,

  }, // {schema: 'public'}
  );
  ComprobanteDePago.associate = (models) => {

    ComprobanteDePago.belongsTo(models.OrdenOnline,{
      foreignKey: 'idOrdenOnline'
    });

    ComprobanteDePago.belongsTo(models.Reserva,{
      foreignKey: 'idReserva'
    });

    ComprobanteDePago.belongsTo(models.FormaDePago,{
      foreignKey: 'idFormaDePago'
    });
  };
  return ComprobanteDePago;
};