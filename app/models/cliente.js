'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    idCliente: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true,
    },
    nombres: DataTypes.STRING(50),
    apellidos: DataTypes.STRING(50),
    telefono: DataTypes.STRING(50),
    direccion: DataTypes.STRING(50),
    email: { type: DataTypes.STRING(50), unique: true },
    dni: { type: DataTypes.STRING(12), unique: true },
    idUser: DataTypes.INTEGER,
  },// {schema: 'public'}
  );
  Cliente.associate = (models) => {
    Cliente.belongsTo(models.User,{
      foreignKey: 'idUser'
    });

    Cliente.hasMany(models.Reserva,{
      foreignKey: 'idCliente'
    });
    Cliente.hasMany(models.OrdenOnline,{
      foreignKey: 'idCliente'
    });
  };

  return Cliente;
};