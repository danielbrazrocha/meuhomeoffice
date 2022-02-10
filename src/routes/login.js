var express = require('express');
var router = express.Router();
const LoginController = require('../controllers/LoginController');

// GET Login Page
router.get('/', LoginController.showLogin);
// Post para processar os dados do formulário de Login
router.post('/', LoginController.logon);

module.exports = router;