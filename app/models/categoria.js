'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define('Categoria', {
    idCategoria: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true,
    },
    nombre: DataTypes.STRING(50),
    descripcion: DataTypes.STRING(250),
  }, //{schema: 'public'}
  );
  Categoria.associate = (models) =>{
    Categoria.hasMany(models.Producto,{
      foreignKey: 'idCategoria'
    });
  };
  return Categoria;
};