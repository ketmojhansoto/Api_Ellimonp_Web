const express = require('express');
const router = express.Router();
const formadepagoCtrl = require('../controllers/formasdepago.controller');

/* GET home page. */
router.get('/', formadepagoCtrl.list);
router.get('/:id', formadepagoCtrl.get);
router.post('/', formadepagoCtrl.create);
router.put('/:id', formadepagoCtrl.update);
router.delete('/:id', formadepagoCtrl.remove);

module.exports = router;
