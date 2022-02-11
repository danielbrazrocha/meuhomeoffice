const fs = require('fs');
const path = require('path');
//const bcrypt = require('bcrypt');
const validateRegister = require('../middlewares/validator');

let usuarioJson = path.join("../mockdata/usuarios.json")
const UsuarioController = {

  index: (req, res) => {
    res.render('usuarios');
    let usuarioId = req.params.id;
  },

  // salvaCadastro: (req, res) => {
  //   let {nome, email, senha} = req.body;
  //   let senhaC = bcrypt.hashSync(senha, 10)
  //   let usuario = JSON.stringify({nome, email, senha:senhaC});
    
  //   fs.writeFileSync(usuarioJson, usuario)
  //   res.send('Usuário cadastrado com sucesso!');
  // },

  /*loginForm: (req, res) => {
    res.render('login')
  },  
  logarUsuario: (req, res) => {
    let {email, senha} = req.body;
    let usuarioSalvo = fs.readFileSync(usuarioJson,{encoding: 'utf-8'});
    usuarioSalvo = JSON.parse(usuarioSalvo);

    if(email != usuarioSalvo.email) {
      return res.send('Usuário inválido!');
    }

    if(bcrypt.compareSync(senha, usuarioSalvo.senha)){
      return res.send("Senha inválida!");
    }

    req.session.usuario = usuarioSalvo

    if(logado != undefined){
      res.cookie('usuarioLogado', usuarioSalvo.email, {maxAge:600000})
    }

    res.redirect("/produtos");
  }     */
}

module.exports = UsuarioController;