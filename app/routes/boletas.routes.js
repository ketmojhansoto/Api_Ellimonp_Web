const express = require('express');
const router = express.Router();
const boletaCtrl = require('../controllers/boleta.controller');

/* GET home page. */
router.get('/', boletaCtrl.list);
router.get('/:id', boletaCtrl.get);
router.get('/:id/tareas', boletaCtrl.tareas);
router.post('/', boletaCtrl.create);
router.put('/:id', boletaCtrl.update);
router.delete('/:id', boletaCtrl.remove);

module.exports = router;
