'use strict';
module.exports = (sequelize, DataTypes) => {
  const DetalleOrdenOnline = sequelize.define('DetalleOrdenOnline', {
    idDetalleOrdenOnline: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true,
    },
    cantidad: DataTypes.STRING(50),
    subtotal: DataTypes.STRING(250),
    adicional: DataTypes.STRING,
  }, // {schema: 'public'}
  );
  DetalleOrdenOnline.associate = (models) => {
    DetalleOrdenOnline.belongsTo(models.OrdenOnline,{
      foreignKey: 'ordenOnlineId'
    });
    
    DetalleOrdenOnline.belongsTo(models.Producto,{
      foreignKey: 'productoId'
    });
  };
  return DetalleOrdenOnline;
};