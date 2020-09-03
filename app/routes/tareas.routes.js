const express = require('express');
const router = express.Router();
const tareaCtrl = require('../controllers/tareas.controller');

/* GET home page. */
router.get('/', tareaCtrl.list);
router.get('/:id', tareaCtrl.get);
router.post('/', tareaCtrl.create);
router.put('/:id', tareaCtrl.update);
router.delete('/:id', tareaCtrl.remove);

module.exports = router;
