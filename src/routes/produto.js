var express = require('express');
var router = express.Router();
const ProdutoController = require('../controllers/ProdutoController');
const isAuth = require('../middlewares/isAuth');

// GET Posts Page
router.get('/:id', isAuth, ProdutoController.detalhesProduto);

module.exports = router;