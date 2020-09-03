const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users.controller');

/* GET home page. */
router.get('/', userCtrl.list);
router.get('/:id', userCtrl.get);
router.post('/', userCtrl.create);
router.put('/:id', userCtrl.update);
router.delete('/:id', userCtrl.remove);

module.exports = router;