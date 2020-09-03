const db = require('../models');
const Cliente = db.Cliente;
const User = db.User;

exports.list = async function(req, res) {
  try {
    const todocli = await Cliente.findAll(
      {
        attributes: ['idCliente','nombres', 'apellidos', 'telefono','direccion','email', 'dni','idUser']
      }
    );

    const user = await User.findAll(
      {
        attributes: ['idUser', 'nombreuser', 'contrasenia']
      }
    );

    let clientes = [];

    for (const pid in todocli) {
      for (const usuario of user) {
        if (todocli[pid].idUser === usuario.idUser
        ) {
          clientes.push({
            'idCliente': todocli[pid].idCliente,
            'nombres': todocli[pid].nombres,
            'apellidos': todocli[pid].apellidos,
            'telefono': todocli[pid].telefono,
            'direccion': todocli[pid].direccion,
            'email': todocli[pid].email,
            'dni': todocli[pid].dni,  
            usuario
          })
        }
      }
    }
    res.json(clientes);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

exports.get = async function(req, res) {
  try {
    const id = req.params.id;
    const cliente = await Cliente.findOne(
      {
        //Select nombre, apellidos, email, dni from 
        where: {idCliente: id},
        attributes: ['idCliente','nombres', 'apellidos', 'telefono','direccion','email', 'dni'],
      }
    );
    if(cliente){
      res.json(cliente);
    } else{
      res.status(404).json({error: 'not found'})
    } 
  } catch(err) {
    res.status(500).json({error: err});
  }
}

// POST /
exports.create = async function(req, res) {
  try{
      const nuevoCliente = await Cliente.create(req.body);
      res.json(nuevoCliente);
  } catch(err){
      res.status(500).json({error: err});
  }
};

// PUT /
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
      await Cliente.update(req.body,{where: {idCliente: id}});
      res.json({ok: 'ok'})
  } catch(error){}
};

//DELETE //
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
      await Cliente.destroy({where: {idCliente: id} });
      res.json({ok: 'ok'})
        
  } catch(error){
      res.status(500).json({error: err});
  }
};