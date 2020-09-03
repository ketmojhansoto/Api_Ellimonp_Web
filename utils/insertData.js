const db = require('../app/models');

const now = new Date();

const clientes = [
  {
    nombres:'Usuario',
    apellidos: 'Global',
    telefono:'931553919',
    direccion:'Jr. Cajamarca #740',
    email: 'usuarioglobal@gmail.com',
    dni:'74859642',
    idUser:'1',
  },
  {
    nombres:'Jhonatan',
    apellidos: 'Yalico Meza',
    telefono:'931553919',
    direccion:'Calle Jupiter 177',
    email: 'i1820316@continental.edu.pe',
    dni:'72912835',
    idUser:'2',
  },
  {
    nombres:'Ketmo',
    apellidos: 'Soto Quilca',
    telefono:'951258357',
    direccion:'Prolongacion San Carlos 555',
    email: 'i1820333@continental.edu.pe',
    dni:'74185236',
    idUser:'3',
  },
  {
    nombres:'Betzabe',
    apellidos: 'Cerron Hinostroza',
    telefono:'951254786',
    direccion:'Pasaje lo Eucaliptos 159',
    email: 'i1820380@continental.edu.pe',
    dni:'75284265',
    idUser:'4',
  },
  {
    nombres:'Emerson',
    apellidos: 'Gabriel Huaman',
    telefono:'951254786',
    direccion:'Pasaje lo Eucaliptos 159',
    email: 'i1820330@continental.edu.pe',
    dni:'75284263',
    idUser:'5',
  },
  {
    nombres:'Emmerson',
    apellidos: 'Chanco Miranda',
    telefono:'951254786',
    direccion:'Pasaje lo Eucaliptos 159',
    email: 'i1820332@continental.edu.pe',
    dni:'75284159',
    idUser:'6',
  },
];
 const users = [
  {
    nombreuser:'userglobal',
    contrasenia:'123456',
  },
  {
    nombreuser:'jyalico',
    contrasenia:'123456',
  },
  {
    nombreuser:'ksoto',
    contrasenia:'123456',
  },
  {
    nombreuser:'bcerron',
    contrasenia:'123456',
  },
  {
    nombreuser:'egabriel',
    contrasenia:'123456',
  },
  {
    nombreuser:'echanco',
    contrasenia:'123456',
  },
 ];

 const reservas = [
   {
     fecha:'2019-10-10',
     hora:'10:00',
     estado:'Pendiente',
     productoId:'1',
     idMesa:'1',
     idCliente:'1',
   },
   {
     fecha:'2019-10-10',
     hora:'05:00',
     estado:'Pendiente',
     productoId:'2',
     idMesa:'2',
     idCliente:'2',
   },
   {
     fecha:'2019-10-10',
     hora:'02:20',
     estado:'Pendiente',
     productoId:'3',
     idMesa:'3',
     idCliente:'3',
   },
   {
     fecha:'2019-10-10',
     hora:'02:20',
     estado:'Pagado',
     productoId:'3',
     idMesa:'3',
     idCliente:'3',
   },
   {
     fecha:'2019-10-10',
     hora:'02:20',
     estado:'Sin Pagar',
     productoId:'3',
     idMesa:'3',
     idCliente:'3',
   },
   {
     fecha:'2019-10-10',
     hora:'02:20',
     estado:'Pagado y Terminado',
     productoId:'3',
     idMesa:'3',
     idCliente:'3',
   },
 ];

 const mesas = [
   {
    numerodemesa: '7',
    capacidad: '6',
    descripcion: 'a lado de la ventana'
   },
   {
    numerodemesa: '8',
    capacidad: '4',
    descripcion: 'a lado de la puerta'
   },
   {
    numerodemesa: '9',
    capacidad: '6',
    descripcion: 'a lado de la pescera'
   },
 ];

 const detallereservas =[
   {
     cantidad:'2',
     subtotal:'20.00',
     adicional:'sin nada',
     idReserva:'1',
     idProducto:'1',
   },
   {
     cantidad:'2',
     subtotal:'20.00',
     adicional:'sin nada',
     idReserva:'1',
     idProducto:'2',
   },
   {
     cantidad:'2',
     subtotal:'20.00',
     adicional:'sin nada',
     idReserva:'3',
     idProducto:'3',
   },
 ];
const productos = [
  {
    nombre: 'Ceviche',
    descripcion: 'con pescado',
    precio: '15.00',
    imagen: 'https://limonpimg.s3.us-east-2.amazonaws.com/img_web/plato01.jpg',
    idCategoria:'1'
  },
  {
    nombre: 'Ceviche Pulpo',
    descripcion: 'con pescado',
    precio: '12.50',
    imagen: 'https://limonpimg.s3.us-east-2.amazonaws.com/img_web/plato02.jpg',
    idCategoria:'1'
  },
  {
    nombre: 'Ceviche De Conchas Negras',
    descripcion: 'con pescado',
    precio: '10.00',
    imagen: 'https://limonpimg.s3.us-east-2.amazonaws.com/img_web/plato03.jpg',
    idCategoria:'1'
  },
  {
    nombre: 'Mariscos',
    descripcion: 'con mariscos',
    precio: '15.00',
    imagen: 'https://limonpimg.s3.us-east-2.amazonaws.com/img_web/plato06.jpg',
    idCategoria:'2'
  },
  {
    nombre: 'Leche de tigre',
    descripcion: 'mucha leche de tigre',
    precio: '6.50',
    imagen: 'https://limonpimg.s3.us-east-2.amazonaws.com/img_web/plato05.jpg',
    idCategoria:'3'
  },
];

const categorias = [
  {
    nombre:'Ceviche',
    descripcion:'Categoria Ceviches',
  },
  {
    nombre:'Arroz',
    descripcion:'Categoria Arroz',
  },
  {
    nombre:'Criollos',
    descripcion:'Categoria De Comida Criolla',
  },
  {
    nombre:'Combos',
    descripcion:'Categoria De Combos Con Platos de Las Categorias del Ceviches, Mariscos y Criollos',
  },
  {
    nombre:'Bebidas',
    descripcion:'Categoria De Bebidas',
  },
];

const formasdepago = [
  {
    formadepago:'Visa',
    estado:'deshabilitado'
  },
  {
    formadepago:'Post Delivery',
    estado:'deshabilitado'
  },
];

const comprobantedepago = [
  {
    fecha:'2019-10-10',
    hora:'10:02',
    idFormaDePago:'1',
    subtotal:'205',
    total:'220',
    idBoleta:'1',
    idOrdenOnline:'1',
  },
  {
    fecha:'2009-08-08',
    hora:'10:02',
    idFormaDePago:'2',
    tipo:'reserva',
    subtotal:'18',
    total:'20',
    idBoleta:'2',
    idOrdenOnline:'2',
  },
  {
    fecha:'2008-08-03',
    hora:'10:02',
    idFormaDePago:'2',
    tipo:'reserva',
    subtotal:'150',
    total:'190',
    idBoleta:'3',
    idOrdenOnline:'3',
  },
  {
    fecha:'2019-10-10',
    hora:'10:02',
    idFormaDePago:'1',
    subtotal:'205',
    total:'220',
    idBoleta:'1',
    idReserva:'1',
  },
  {
    fecha:'2019-08-08',
    hora:'10:02',
    idFormaDePago:'2',
    tipo:'reserva',
    subtotal:'18',
    total:'20',
    idBoleta:'2',
    idReserva:'2',
  },
  {
    fecha:'2019-08-08',
    hora:'10:02',
    idFormaDePago:'2',
    tipo:'reserva',
    subtotal:'150',
    total:'190',
    idBoleta:'3',
    idReserva:'3',
  },
];
  
const onderonlines = [
  {
    telefono:'951258357',
    direccion:'Calle los perdidos',
    estado:'Pendiente',
    total:'50.00',
    idCliente:'1',
  },
  {
    telefono:'951258357',
    direccion:'Calle los encontrados',
    estado:'Pendiente',
    total:'50.00',
    idCliente:'2',
  },
  {
    telefono:'951258357',
    direccion:'Calle los perdidos',
    estado:'Pagado',
    total:'50.00',
    idCliente:'3',
  },
  {
    telefono:'951258357',
    direccion:'Calle los perdidos',
    estado:'Sin Pagar',
    total:'50.00',
    idCliente:'3',
  },
  {
    telefono:'951258357',
    direccion:'Calle los perdidos',
    estado:'Pagado y Entregado',
    total:'50.00',
    idCliente:'3',
  },
];

const detalleordenonlines = [
  {
    ordenOnlineId:'1',
    productoId: '1',
    adicional:'Haber como va wey',
    cantidad:'5',
    subtotal:'16',
    total:'20'
  },
  {
    ordenOnlineId:'2',
    productoId: '2',
    adicional:'Haber como va wey',
    cantidad:'6',
    subtotal:'22',
    total:'25'
  },
  {
    ordenOnlineId:'3',
    productoId: '3',
    adicional:'Haber como va wey',
    cantidad:'9',
    subtotal:'10',
    total:'12'
  },
];
async function insertData() {
  console.log('Iniciando la insercion de tablas');
  console.log('-----------------------------');
  // users
  for (const user of users) {
    await db.User.create(user);
  }
  // mesa
  for (const mesa of mesas) {
    await db.Mesa.create(mesa);
  }
  // categoria
  for (const categoria of categorias) {
    await db.Categoria.create(categoria);
  }
  // producto
  for (const producto of productos) {
    await db.Producto.create(producto);
  }
  // formas de pago
  for (const formadepago of formasdepago) {
    await db.FormaDePago.create(formadepago);
  }
  // clientes
  for (const cliente of clientes) {
    await db.Cliente.create(cliente);
  }
  // reserva
  for (const reserva of reservas) {
    await db.Reserva.create(reserva);
  }
  // detallereserva
  for (const detallereserva of detallereservas) {
    await db.DetalleReserva.create(detallereserva);
  }
  // orden online
  for (const ordenonline of onderonlines) {
    await db.OrdenOnline.create(ordenonline);
  }
  // detalle orden online
  for (const detalleordenonline of detalleordenonlines) {
    await db.DetalleOrdenOnline.create(detalleordenonline);
  }
  // comprobantedepago
  for (const comprobantedepagos of comprobantedepago) {
    await db.ComprobanteDePago.create(comprobantedepagos);
  }

  console.log('-----------------------------');
  console.log('Insercion de tablas finalizado');
}

// ejecucion de la funcion
insertData();