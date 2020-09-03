  'use strict';
  module.exports = (sequelize, DataTypes) => {
    const OrdenOnline = sequelize.define('OrdenOnline', {
      idOrdenOnline: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
      },
      direccion: DataTypes.STRING(50),
      telefono: DataTypes.STRING(250),
      estado: DataTypes.STRING,
      tipo:DataTypes.STRING,
      total: DataTypes.STRING,
      idCliente:DataTypes.INTEGER,
    }, // {schema: 'public'}
    );
    OrdenOnline.associate = (models)=>{

      OrdenOnline.belongsTo(models.Cliente,{
        foreignKey: 'idCliente'
      });  

      OrdenOnline.hasMany(models.ComprobanteDePago,{
        foreignKey: 'idOrdenOnline'
      });
      
      OrdenOnline.belongsToMany(models.Producto,{
        through:'DetalleOrdenOnline',
        foreignKey: 'ordenOnlineId',
        otherKey:'productoId'
      });
    };
    return OrdenOnline;
  }; 