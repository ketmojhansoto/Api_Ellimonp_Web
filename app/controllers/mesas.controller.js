const db = require('../models');
const Mesa = db.Mesa;

exports.list = async function(req, res) {
  try {
    const mesas = await Mesa.findAll();
    res.json(mesas);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

exports.get = async function(req, res) {
  try {
    const id = req.params.id;
    const mesas = await Mesa.findOne({where: {idMesa: id}});
    res.json(mesas);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

// POST /productos/
exports.create = async function(req, res) {
  try{
      const nuevoMesa = await Mesa.create(req.body);
      res.json(nuevoMesa);
  } catch(err){
      res.status(500).json({error: err});
  }
};

// PUT /productos/5
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
      await Mesa.update(req.body,{where: {idMesa: id}});
      res.json({ok: 'ok'})
        
  } catch(error){}
};

//DELETE //productos/9
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
      await Mesa.destroy({where: {idMesa: id} });
      res.json({ok: 'ok'})
        
  } catch(error){
      res.status(500).json({error: err});
  }
};
