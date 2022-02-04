var express = require('express');
var router = express.Router();
const CadastroController = require('../controllers/CadastroController');

// GET Cadastro Page
router.get('/', CadastroController.index);
router.get('/cadastro', CadastroController.registraSenhaCadastro);
// Post Login Page
router.post('/cadastro', CadastroController.salvaSenhaCadastro);

module.exports = router;
