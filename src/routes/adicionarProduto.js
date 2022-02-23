var express = require('express');
var router = express.Router();
const AdicionarProdutoController = require('../controllers/AdicionarProdutoController');
const isAuth = require('../middlewares/isAuth');
const isAdmin = require('../middlewares/isAdmin');
const validator = require('../middlewares/validator');

// GET Página de Cadastro de Produto
router.get('/', isAuth, isAdmin, AdicionarProdutoController.showAddProduct);

// POST Enviando os dados do formulário para cadastro do produto
router.post('/', validator, AdicionarProdutoController.registerProduct);

module.exports = router;
