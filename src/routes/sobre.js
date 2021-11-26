var express = require('express');
var router = express.Router();
const SobreController = require('../controllers/SobreController');

// GET Sobre Page
router.get('/', SobreController.index);

module.exports = router;