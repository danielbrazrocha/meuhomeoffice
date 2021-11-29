var express = require('express');
var router = express.Router();
const IndexController = require('../controllers/IndexController');

// GET Login Page
router.get('/', IndexController.index);

module.exports = router;

