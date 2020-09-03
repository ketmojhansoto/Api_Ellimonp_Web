const db = require('../models');
const FormasDePago = db.FormaDePago;

exports.list = async function(req, res) {
  try {
    const formasdepago = await FormasDePago.findAll();
    res.json(formasdepago);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

exports.get = async function(req, res) {
  try {
    const id = req.params.id;
    const formadepago = await FormasDePago.findOne({where: {id: id}});
    res.json(formadepago);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

// POST /productos/
exports.create = async function(req, res) {
  try{
      const nuevoFormasDePago = await FormasDePago.create(req.body);
      res.json(nuevoFormasDePago);
  } catch(err){
      res.status(500).json({error: err});
  }
};

// PUT /productos/5
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
      await FormasDePago.update(req.body,{where: {id: id}});
      res.json({ok: 'ok'})
        
  } catch(error){}
};

//DELETE //productos/9
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
      await FormasDePago.destroy({where: {id: id} });
      res.json({ok: 'ok'})
        
  } catch(error){
      res.status(500).json({error: err});
  }
};
