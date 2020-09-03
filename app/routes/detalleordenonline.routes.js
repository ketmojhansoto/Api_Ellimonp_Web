const express = require('express');
const router = express.Router();
const detalleordenonlineCtrl = require('../controllers/detalleordenonline.controller');

/* GET home page. */
router.get('/', detalleordenonlineCtrl.list);
router.get('/:id', detalleordenonlineCtrl.get);
router.post('/', detalleordenonlineCtrl.create);
router.put('/:id', detalleordenonlineCtrl.update);
router.delete('/:id', detalleordenonlineCtrl.remove);

module.exports = router;
