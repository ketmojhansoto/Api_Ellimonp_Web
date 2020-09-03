const db = require('../models');
const Reserva = db.Reserva;
const Mesa = db.Mesa;
const DetalleReserva = db.DetalleReserva

exports.list = async function(req, res) {
  try {
    const todores = await Reserva.findAll(
      {
        attributes: ['idReserva','fecha', 'hora','estado', 'idMesa','idCliente']
      }
    );

    const mesas = await Mesa.findAll(
      {
        attributes: ['idMesa', 'numerodemesa', 'capacidad','descripcion']
      }
    );

    let reservas = [];

    for (const pid in todores) {
      for (const mesa of mesas) {
        if (todores[pid].idMesa === mesa.idMesa
        ) {
          reservas.push({
            'idReserva': todores[pid].idReserva,
            'fecha': todores[pid].fecha,
            'hora': todores[pid].hora,
            'estado': todores[pid].estado,
            'idCliente': todores[pid].idCliente,
            mesa
          })
        }
      }
    }
    res.json(reservas);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

exports.get = async function(req, res) {
  try {
    const id = req.params.id;
    const reserva = await Reserva.findOne(
      {
        //Select nombre, apellidos, email, dni from 
        where: {idReserva: id},
      }
    );
    if(reserva){
      res.json(reserva);
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
      const nuevoReserva = await Reserva.create(req.body);

      for (const item in req.body.productos){
        const producto = req.body.productos[item];
        const nuevoDetalleReserva = await DetalleReserva.create({
          cantidad: producto.cantidad,
          subtotal: producto.subtotal,
          adicional: producto.adicional,
          reservaId: nuevoReserva.idReserva,
          productoId: producto.idProducto
        });
      }
      res.json(nuevoReserva);
  } catch(err){
      res.status(500).json({error: err});
  }
};

// PUT /productos/5
exports.update = async function(req, res) {
  const id = req.params.id;
  try {
      await Reserva.update(req.body,{where: {idReserva: id}});
      res.json({ok: 'ok'})
  } catch(error){}
};

//DELETE //productos/9
exports.remove = async function(req, res) {
  const id = req.params.id;
  try {
      await Reserva.destroy({where: {idReserva: id} });
      res.json({ok: 'ok'})
        
  } catch(error){
      res.status(500).json({error: err});
  }
};

