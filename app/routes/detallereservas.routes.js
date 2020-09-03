const express = require('express');
const router = express.Router();
const detallereservaCtrl = require('../controllers/detallereserva.cotroller');

/* GET home page. */
router.get('/', detallereservaCtrl.list);
router.get('/:id', detallereservaCtrl.get);
router.post('/', detallereservaCtrl.create);
router.put('/:id', detallereservaCtrl.update);
router.delete('/:id', detallereservaCtrl.remove);

module.exports = router;
