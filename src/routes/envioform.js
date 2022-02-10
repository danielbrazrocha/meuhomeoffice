var express = require('express');
var router = express.Router();
const EnvioformController = require('../controllers/EnvioformController');

// GET Login Page
router.get('/', EnvioformController.index);

module.exports = router;