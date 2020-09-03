const db = require('../models');
const DetalleReserva = db.DetalleReserva;

exports.list = async function(req, res) {
  try {
    const detallereservas = await DetalleReserva.findAll();
    res.json(detallereservas);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

exports.get = async function(req, res) {
  try {
    const id = req.params.id;
    const detallereserva = await DetalleReserva.findOne(
      {
      where: {idDetalleReserva: id},
    }
    );
    res.json(detallereserva);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

// POST /productos/
exports.create = async function(req, res) {
  try{
      const nuevoDetalleReserva = await DetalleReserva.create(req.body);
      res.json(nuevoDetalleReserva);
  } catch(err){
      res.status(500).json({error: err});
  }
};

// PUT /productos/5
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
      await DetalleReserva.update(req.body,{where: {id: id}});
      res.json({ok: 'ok'})
        
  } catch(error){}
};

//DELETE //productos/9
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
      await DetalleReserva.destroy({where: {id: id} });
      res.json({ok: 'ok'})
        
  } catch(error){
      res.status(500).json({error: err});
  }
};
