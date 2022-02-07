var express = require('express');
var router = express.Router();
const CadastroController = require('../controllers/CadastroController');

// GET Cadastro Page
router.get('/', CadastroController.index);

module.exports = router;
