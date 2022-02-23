var express = require('express');
var router = express.Router();
const AdicionarProdutoController = require('../controllers/AdicionarProdutoController');
const isAuth = require('../middlewares/isAuth');
const validator = require('../middlewares/validator');

// GET Cadastro Page
router.get('/', isAuth, AdicionarProdutoController.showAddProduct);

// POST Enviando os dados do formulário para cadastro do produto
router.post('/', validator, AdicionarProdutoController.registerProduct);

module.exports = router;
