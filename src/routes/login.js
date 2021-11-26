var express = require('express');
var router = express.Router();
const LoginController = require('../controllers/LoginController');

// GET Login Page
router.get('/', LoginController.index);

module.exports = router;