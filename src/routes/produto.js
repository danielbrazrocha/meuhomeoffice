var express = require('express');
var router = express.Router();
const ProdutoController = require('../controllers/ProdutoController');

// GET Posts Page
router.get('/', ProdutoController.index);

module.exports = router;