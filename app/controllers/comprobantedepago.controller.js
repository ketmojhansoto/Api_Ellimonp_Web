const db = require('../models');
const ComprobanteDePago = db.ComprobanteDePago;

exports.list = async function(req, res) {
  try {
    const comprobantedepago = await ComprobanteDePago.findAll();
    res.json(comprobantedepago);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

exports.get = async function(req, res) {
  try {
    const id = req.params.id;
    const comprobantedepago = await ComprobanteDePago.findOne({
      //Select nombre, apellidos, email, dni from 
      where: {idComprobanteDePago: id},
    }
    );
    res.json(comprobantedepago);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

// POST /productos/
exports.create = async function(req, res) {
  try{
      const nuevoComprobanteDePago = await ComprobanteDePago.create(req.body);
      res.json(nuevoComprobanteDePago);
  } catch(err){
      res.status(500).json({error: err});
  }
};

// PUT /productos/5
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
      await ComprobanteDePago.update(req.body,{where: {idComprobanteDePago: id}});
      res.json({ok: 'ok'})
        
  } catch(error){}
};

//DELETE //productos/9
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
      await ComprobanteDePago.destroy({where: {idComprobanteDePago: id} });
      res.json({ok: 'ok'})
        
  } catch(error){
      res.status(500).json({error: err});
  }
};
