const express = require('express')
const  {check, validationResult, body} = require('express-validator');

const validateRegister = [
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
];

// Confirmar com Daniel como fazer a parte do roteamento
// router.post('/', validateRegister, UsuarioController.processRegister);
// router.post('/cadastro', UsuarioCOntroller.registro);

module.exports = validateRegister;