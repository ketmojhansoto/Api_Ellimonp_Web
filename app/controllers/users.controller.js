const db = require('../models');
const User = db.User;

exports.list = async function(req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

exports.get = async function(req, res) {
  try {
    const id = req.params.id;
    const user = await User.findOne({where: {idUser: id}});
    res.json(user);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

// POST 
exports.create = async function(req, res) {
  try{
      const nuevoUser = await User.create(req.body);
      res.json(nuevoUser);
  } catch(err){
      res.status(500).json({error: err});
  }
};

// PUT /productos/5
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
      await User.update(req.body,{where: {idUser: id}});
      res.json({ok: 'ok'})
        
  } catch(error){}
};

//DELETE //productos/9
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
      await User.destroy({where: {idUser: id} });
      res.json({ok: 'ok'})
        
  } catch(error){
      res.status(500).json({error: err});
  }
};
