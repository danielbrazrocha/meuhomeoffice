let usersJson = require('../mockdata/usuarios.json');

const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

let usuarioJson = path.join("../mockdata/usuarios.json")
const UsuarioController = {

  loginForm: (req, res) => {
    res.render('login')
  },  
  usuarioLogado: (req, res) => {
    let {email, senha} = req.body;
    let usuarioSalvo = fs.readFileSync(usuarioJson,{encoding: 'utf-8'});
    usuarioSalvo = JSON.parse(usuarioSalvo);

    if(email != usuarioSalvo.email){
      return res.send('Usuário inválido!');
    }

    if(bcrypt.compareSync(senha, usuarioSalvo.senha)){
      return res.send("Senha inválida!");
    }

    req.session.usuario = usuarioSalvo

    res.redirect("/");
  },    

  // registraSenhaCadastro: (req, res) => {
  //   res.render('registraSenhaCadastro')
  //   // let usuarioId = req.params.id;
  //   // let usuarioJson = mockdata.find(usuario => usuario.id == UsuarioId);
  // },
  // salvaSenhaCadastro: (req, res) => {
  //   let {nome, email, senha} = req.body;
  //   let senhaC = bcrypt.hashSync(senha, 10)
  //   let usuario = JSON.stringify({nome, email, senha:senhaC});
    
  //   fs.writeFileSync(usuarioJson, usuario)
  //   res.send('Usuário cadastrado com sucesso!');
  // }, 
}

module.exports = UsuarioController;