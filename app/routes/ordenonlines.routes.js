const express = require('express');
const router = express.Router();
const ordenonlineCtrl = require('../controllers/ordenonline.controller');

/* GET home page. */
router.get('/', ordenonlineCtrl.list);
router.get('/:id', ordenonlineCtrl.get);
router.post('/', ordenonlineCtrl.create);
router.put('/:id', ordenonlineCtrl.update);
router.delete('/:id', ordenonlineCtrl.remove);

module.exports = router;
