const express = require('express');
const router = express.Router();
const clienteCtrl = require('../controllers/clientes.controller');

/* GET home page. */
router.get('/', clienteCtrl.list);
router.get('/:id', clienteCtrl.get);
router.post('/', clienteCtrl.create);
router.put('/:id', clienteCtrl.update);
router.delete('/:id', clienteCtrl.remove);

module.exports = router;