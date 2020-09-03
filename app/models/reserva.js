'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reserva = sequelize.define('Reserva', {
    idReserva: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true,
    },
    fecha: DataTypes.DATEONLY,
    hora: DataTypes.TIME,
    estado: DataTypes.STRING,
    total:DataTypes.STRING,
    idMesa: DataTypes.INTEGER,
    idCliente:DataTypes.INTEGER,
  }, // {schema: 'public'}
  );
  Reserva.associate = (models) => {

    Reserva.belongsTo(models.Cliente,{
      foreignKey: 'idCliente'
    });

    Reserva.belongsTo(models.Mesa,{
      foreignKey: 'idMesa'
    });

    Reserva.hasMany(models.ComprobanteDePago,{
      foreignKey: 'idReserva'
    });
    
    Reserva.belongsToMany(models.Producto,{
      through:'DetalleReserva',
      foreignKey:'reservaId',
      otherKey:'productoId'
    });
  };
  return Reserva;
};