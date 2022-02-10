var express = require('express');
var router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');

router.get('/', UsuarioController.index);

module.exports = router;