const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

let usuarioJson = path.join("usuarios.json")
let UsuarioController = {
  registraSenha: (req, res) => {
    res.render('registraSenha')
  },
  salvaSenha: (req, res) => {
    let {email, senha} = req.body;
    let usuarioSalvo = fs.readFileSync(usuarioJson,{encoding: 'utf-8'});
    usuarioSalvo = JSON.parse(usuarioSalvo);

    if(email != usuarioSalvo.email){
      return res.send('Usuário inválido!');
    }

    if(bcrypt.compareSync(senha, usuarioSalvo.senha)){
      return res.send("Senha inválida!");
    }

    res.redirect("/produtos");
  }, 

  registraSenhaCadastro: (req, res) => {
    res.render('registraSenhaCadastro')
  },
  salvaSenhaCadastro: (req, res) => {
    let {nome, email, senha} = req.body;
    let senhaC = bcrypt.hashSync(senha, 10)
    let usuario = JSON.stringify({nome, email, senha:senhaC});

    fs.writeFileSync(usuarioJson, usuario)
    res.send('Usuário cadastrado com sucesso!');
  }, 
}