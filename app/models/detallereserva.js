'use strict';
module.exports = (sequelize, DataTypes) => {
  const DetalleReserva = sequelize.define('DetalleReserva', {
    idDetalleReserva: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true,
    },
    cantidad: DataTypes.STRING(50),
    subtotal: DataTypes.STRING(250),
    adicional: DataTypes.STRING,
  }, // {schema: 'public'}
  );
  DetalleReserva.associate = (models) => {
    DetalleReserva.belongsTo(models.Reserva,{
      foreignKey: 'reservaId'
    });

    DetalleReserva.belongsTo(models.Producto,{
      foreignKey: 'productoId'
    });
  };
  return DetalleReserva;
};