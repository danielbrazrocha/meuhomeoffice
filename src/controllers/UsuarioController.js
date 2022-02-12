const bcrypt = require('bcryptjs');
const validateRegister = require('../middlewares/validator');



const UsuarioController = {
  
  index: (req, res) => {
    //verificando se existe uma sessão de usuário ativa, passando globalmente a variavel user para a view
    //deverá ser feito esta operação a cada route que utilize o middleware de autenticação isAuth
    const {user} = req.session;
  
    // verifica se o usuário já existe, redirecionando para a home caso não esteja logado
    if (!user){
        return res.redirect('/');
    }
    res.render('usuario');
  },

  // salvaCadastro: (req, res) => {
  //   let {nome, email, senha} = req.body;
  //   let senhaC = bcrypt.hashSync(senha, 10)
  //   let usuario = JSON.stringify({nome, email, senha:senhaC});
    
  //   fs.writeFileSync(usuarioJson, usuario)
  //   res.send('Usuário cadastrado com sucesso!');
  // },

  loginForm: (req, res) => {
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
  }     
}

module.exports = UsuarioController;