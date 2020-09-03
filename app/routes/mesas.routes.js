const express = require('express');
const router = express.Router();
const mesaCtrl = require('../controllers/mesas.controller');

/* GET home page. */
router.get('/', mesaCtrl.list);
router.get('/:id', mesaCtrl.get);
router.post('/', mesaCtrl.create);
router.put('/:id', mesaCtrl.update);
router.delete('/:id', mesaCtrl.remove);

module.exports = router;
