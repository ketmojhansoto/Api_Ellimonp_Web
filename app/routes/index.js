var express = require('express');
var router = express.Router();


const userRouter = require('./users.routes');
const clienteRouter = require('./clientes.routes');
const reservaRouter = require('./reservas.routes');
const mesaRouter = require('./mesas.routes');
const detallereservasRouter = require('./detallereservas.routes');
const productoRouter = require('./productos.routes');
const categoriaRouter = require('./categorias.routes');
const formadepagoRouter = require('./formasdepago.routes');
const comprobantedepagoRouter = require('./comprobantedepago.routes');
const oredenonlineRouter = require('./ordenonlines.routes');
const detalleordenonlineRouter = require('./detalleordenonline.routes');
const sendemail = require('./sendemail.routes');
const comentario = require('./comentario.routes');
const correoemail = require('./correoemail.routes')

// AWS
const awsRouter = require('./aws.routes');

/* GET home page. */
router.get('/', function (req, res, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  res.render('index', { title: 'Bienvenido a la API' });
});


router.use('/users', userRouter);
router.use('/clientes', clienteRouter);
router.use('/reservas', reservaRouter);
router.use('/mesas', mesaRouter);
router.use('/detallereservas', detallereservasRouter);
router.use('/productos', productoRouter);
router.use('/categorias', categoriaRouter);
router.use('/formasdepago', formadepagoRouter);
router.use('/comprobantedepago', comprobantedepagoRouter);
router.use('/ordenonline', oredenonlineRouter);
router.use('/detalleordenonline', detalleordenonlineRouter);
router.use('/sendemail', sendemail);
router.use('/comentario', comentario);
router.use('/correoorden', correoemail);

//AWS

router.use('/upload', awsRouter);


module.exports = router;
