// obtener modelos
const db = require('../app/models');

async function createSchema() {
  console.log('Iniciando la creacion de tablas');
  console.log('-----------------------------');
  try {
    // Definicion de modelos en orden de creacion
    await db.User.sync({force: true});
    await db.Categoria.sync({force: true});
    await db.Mesa.sync({force: true});
    await db.Producto.sync({force: true});
    await db.FormaDePago.sync({force: true});
    await db.Cliente.sync({force: true});
    await db.Reserva.sync({force: true});
    await db.DetalleReserva.sync({force: true});
    await db.OrdenOnline.sync({force: true});
    await db.DetalleOrdenOnline.sync({force: true});
    await db.ComprobanteDePago.sync({force: true});
    
  } catch(err) {
    console.log('ERROR: ', err);
  }
  console.log('-----------------------------');
  console.log('Creacion de tablas finalizado');
}
// ejecucion de la funcion
createSchema();