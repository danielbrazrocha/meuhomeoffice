var express = require('express');
var router = express.Router();
const ProdutoController = require('../controllers/ProdutoController');

// GET Posts Page
router.get('/:id', ProdutoController.detalhesProduto);

module.exports = router;