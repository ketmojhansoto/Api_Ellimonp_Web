'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    idUser: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true,
    },
    nombreuser: DataTypes.STRING(50),
    contrasenia: DataTypes.STRING,
  },// {schema: 'public'}
  );
  User.associate = (models) =>{
    User.hasMany(models.Cliente,{
      foreignKey: 'idUser'
    });
  };
  return User;
};