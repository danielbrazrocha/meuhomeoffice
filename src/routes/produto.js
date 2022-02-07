var express = require('express');
var router = express.Router();
const ProdutoController = require('../controllers/ProdutoController');
let auth = require('../middlewares/auth');

// GET Posts Page
router.get('/:id', ProdutoController.detalhesProduto);
router.get('/', auth);

module.exports = router;