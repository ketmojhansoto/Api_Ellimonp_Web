const express = require('express');
const router = express.Router();
const categoriaCtrl = require('../controllers/categorias.controller');

/* GET home page. */
router.get('/', categoriaCtrl.list);
router.get('/:id', categoriaCtrl.get);
router.post('/', categoriaCtrl.create);
router.put('/:id', categoriaCtrl.update);
router.delete('/:id', categoriaCtrl.remove);

module.exports = router;
