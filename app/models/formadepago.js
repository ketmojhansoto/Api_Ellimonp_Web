'use strict';
module.exports = (sequelize, DataTypes) => {
  const FormaDePago = sequelize.define('FormaDePago', {
    idFormaDePago: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true,
    },
    formadepago: DataTypes.STRING,
    estado:DataTypes.STRING,
  },// {schema: 'public'}
  );
  FormaDePago.associate = (models) =>{
    FormaDePago.hasOne(models.ComprobanteDePago,{
      foreignKey: 'idFormaDePago'
    });
  };
  return FormaDePago;
};