var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MeuHomeOffice.com - A loja do seu trabalho em casa' });
});

module.exports = router;