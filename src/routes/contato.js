var express = require('express');
var router = express.Router();
const ContatoController = require('../../src/controllers/ContatoController');

// GET contato Page
router.get('/', ContatoController.index);

module.exports = router;