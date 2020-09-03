const db = require('../models');
const Producto = db.Producto;
const Categoria = db.Categoria;

exports.list = async function (req, res) {
  try {
    const todoproductos = await Producto.findAll(
      {
        attributes: ['idProducto', 'nombre', 'descripcion', 'precio', 'imagen', 'idCategoria']
      }
    );

    const categoria = await Categoria.findAll(
      {
        attributes: ['idCategoria', 'nombre', 'descripcion']
      }
    );

    let productos = [];

    for (const pid in todoproductos) {
      for (const cat of categoria) {
        if (todoproductos[pid].idCategoria === cat.idCategoria
        ) {
          productos.push({
            'idProducto': todoproductos[pid].idProducto,
            'nombre': todoproductos[pid].nombre,
            'descripcion': todoproductos[pid].descripcion,
            'precio': todoproductos[pid].precio,
            'imagen': todoproductos[pid].imagen,
            cat
          })
        }
      }
    }

    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

exports.get = async function (req, res) {
  try {
    const id = req.params.id;
    const producto = await Producto.findOne(
      {
        where: { idProducto: id },
        attributes: ['idProducto', 'nombre', 'descripcion', 'precio', 'imagen', 'idCategoria'],
      }
    );
    res.json(producto);
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

// POST /productos/
exports.create = async function (req, res) {
  try {
    const nuevoProducto = await Producto.create(req.body);
    res.json(nuevoProducto);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// PUT /productos/5
exports.update = async function (req, res) {
  const id = req.params.id;
  try {
    await Producto.update(req.body, { where: { idProducto: id } });
    res.json({ ok: 'ok' })

  } catch (error) { }
};

//DELETE //productos/9
exports.remove = async function (req, res) {
  const id = req.params.id;
  try {
    await Producto.destroy({ where: { idProducto: id } });
    res.json({ ok: 'ok' })

  } catch (error) {
    res.status(500).json({ error: err });
  }
};
