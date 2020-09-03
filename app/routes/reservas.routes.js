const express = require('express');
const router = express.Router();
const reservaCtrl = require('../controllers/reservas.controller');

/* GET home page. */
router.get('/', reservaCtrl.list);
router.get('/:id', reservaCtrl.get);
router.post('/', reservaCtrl.create);
router.put('/:id', reservaCtrl.update);
router.delete('/:id', reservaCtrl.remove);

module.exports = router;
