const express = require('express');
const router = express.Router();
const comprobantedepagoCtrl = require('../controllers/comprobantedepago.controller');

/* GET home page. */
router.get('/', comprobantedepagoCtrl.list);
router.get('/:id', comprobantedepagoCtrl.get);
router.post('/', comprobantedepagoCtrl.create);
router.put('/:id', comprobantedepagoCtrl.update);
router.delete('/:id', comprobantedepagoCtrl.remove);

module.exports = router;
