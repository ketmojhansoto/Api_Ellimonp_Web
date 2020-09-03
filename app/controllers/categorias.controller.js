const db = require('../models');
const Categoria = db.Categoria;

exports.list = async function(req, res) {
  try {
    const categorias = await Categoria.findAll();
    res.json(categorias);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

exports.get = async function(req, res) {
  try {
    const id = req.params.id;
    const categoria = await Categoria.findOne({where: {idCategoria: id}});
    res.json(categoria);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

// POST /productos/
exports.create = async function(req, res) {
  try{
      const nuevoCategoria = await Categoria.create(req.body);
      res.json(nuevoCategoria);
  } catch(err){
      res.status(500).json({error: err});
  }
};

// PUT /productos/5
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
      await Categoria.update(req.body,{where: {idCategoria: id}});
      res.json({ok: 'ok'})
        
  } catch(error){}
};

//DELETE //productos/9
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
      await Categoria.destroy({where: {idCategoria: id} });
      res.json({ok: 'ok'})
        
  } catch(error){
      res.status(500).json({error: err});
  }
};
