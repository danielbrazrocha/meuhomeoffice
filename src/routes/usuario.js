var express = require('express');
var router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');

// Verificar com o Daniel como será feita a parte de validação de informações

/* GET users listing. */
/* router.get('/criar', usuarioController.registroForm);
// router.post('/criar', upload.any(), logDBMiddleware,[
  check('name')
  .notEmpty().withMessage('Deve preencher o nome').bail()
  .isLength({min:5, max: 30}).withMessage('O nome deve ter pelo menos 5 caracteres').bail(),
check('cpf')
  .notEmpty().withMessage('Digite seu CPF').bail()
  .isLength({max:11}).withMessage,
check('email')
  .notEmpty().withMessage().bail()
  .isEmail().withMessage().bail(),
check('password')
  .notEmpty().withMessage().bail()
  .isLength({min:8, max: 25}).withMessage,
check('password repeat')
  .notEmpty().withMessage().bail()
  .isLength({min:8, max: 25}).withMessage
], usuarioController.salvaForm);*/

router.get('/', UsuarioController.index);

module.exports = router;