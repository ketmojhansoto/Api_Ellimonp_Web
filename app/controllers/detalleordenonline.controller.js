const db = require('../models');
const DetalleOrdenOnline = db.DetalleOrdenOnline;

exports.list = async function(req, res) {
  try {
    const detalleordenonlines = await DetalleOrdenOnline.findAll();
    res.json(detalleordenonlines);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

exports.get = async function(req, res) {
  try {
    const id = req.params.id;
    const detalleordenonline = await DetalleOrdenOnline.findOne(
      {
        where: {idDetalleOrdenOnline: id},
      }
    );
    if(detalleordenonline){
      res.json(detalleordenonline);
    } else{
      res.status(404).json({error: 'not found'})
    } 
  } catch(err) {
    res.status(500).json({error: err});
  }
}

// POST /productos/
exports.create = async function(req, res) {
  try{
      const nuevoDetalleOrdenOnline = await DetalleOrdenOnline.create(req.body);
      res.json(nuevoDetalleOrdenOnline);
  } catch(err){
      res.status(500).json({error: err});
  }
};

// PUT /productos/5
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
      await DetalleOrdenOnline.update(req.body,{where: {id: id}});
      res.json({ok: 'ok'})
  } catch(error){}
};

//DELETE //productos/9
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
      await DetalleOrdenOnline.destroy({where: {id: id} });
      res.json({ok: 'ok'})
        
  } catch(error){
      res.status(500).json({error: err});
  }
};

