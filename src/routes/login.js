var express = require('express');
var router = express.Router();
const LoginController = require('../controllers/LoginController');

// GET Login Page
router.get('/', LoginController.index);
router.get('/login', LoginController.registraSenha);
// Post Login Page
router.post('/login', LoginController.salvaSenha);

module.exports = router;