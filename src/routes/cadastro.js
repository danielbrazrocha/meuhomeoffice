var express = require('express');
var router = express.Router();
const CadastroController = require('../controllers/CadastroController');

// GET Cadastro Page
router.get('/', CadastroController.showRegister);

// POST Enviando os dados do formulário para cadastro do usuário
router.post('/', CadastroController.register);

module.exports = router;
