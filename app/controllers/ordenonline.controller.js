const db = require('../models');
const OrdenOnline = db.OrdenOnline;
const DetalleOrdenOnline = db.DetalleOrdenOnline;

exports.list = async function(req, res) {
  try {
    const oredenonlines = await OrdenOnline.findAll();
    res.json(oredenonlines);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

exports.get = async function(req, res) {
  try {
    const id = req.params.id;
    const oredenonline = await OrdenOnline.findOne( 
      {where: {idOrdenOnline: id}}
    );
    res.json(oredenonline);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

// POST /productos/
exports.create = async function(req, res) {
  try{
      const nuevoOrdenOnline = await OrdenOnline.create(req.body);

      for (const item in req.body.productos){
        const producto = req.body.productos[item];
        const nuevoOrdenOnlineProducto = await DetalleOrdenOnline.create({
          cantidad:producto.cantidad,
          subtotal:producto.subtotal,
          adicional:producto.adicional,
          ordenOnlineId: nuevoOrdenOnline.idOrdenOnline,
          productoId: producto.idProducto
        });
      }

      res.json(nuevoOrdenOnline);
  } catch(err){
      res.status(500).json({error: err});
  }
};

// PUT /productos/5
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
      await OrdenOnline.update(req.body,{where: {idOrdenOnline: id}});
      res.json({ok: 'ok'})
        
  } catch(error){}
};

//DELETE //productos/9
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
      await OrdenOnline.destroy({where: {idOrdenOnline: id} });
      res.json({ok: 'ok'})
        
  } catch(error){
      res.status(500).json({error: err});
  }
};
