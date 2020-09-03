'use strict';
module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define('Producto', {

    idProducto: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true,
    },

    nombre: DataTypes.STRING(50),
    descripcion: DataTypes.STRING(250),
    precio: DataTypes.STRING,
    imagen: DataTypes.STRING,
    idCategoria: DataTypes.INTEGER,
  },// {schema: 'public'}
  );
  Producto.associate = (models) => {
    Producto.belongsTo(models.Categoria,{
      foreignKey: 'idCategoria'
    });
  };

  Producto.associate = function(models){
    Producto.belongsToMany(models.Reserva,{
      through:'DetalleReserva',
      foreignKey:'productoId',
      otherKey:'reservaId'
    });
    
    Producto.belongsToMany(models.OrdenOnline,{
      through:'DetalleOrdenOnline',
      foreignKey:'productoId',
      otherKey:'ordenOnlineId'
    });
  };
  return Producto;
};