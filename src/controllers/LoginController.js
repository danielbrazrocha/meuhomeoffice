const { User } = require('../models');
const bcrypt = require("bcryptjs");

const LoginController =  {
    // showLogin = método do controller para renderizar uma view, chamado em index.js
    showLogin: (req, res) => {
        //verificando se existe uma sessão de usuário ativa, passando globalmente a variavel user para a view
        //deverá ser feito esta operação a cada route que utilize o middleware de autenticação isAuth
        const {user} = req.session;

        // verifica se o usuário já existe, redirecionando para a home caso já esteja logado
        if (user){
            return res.redirect('/');
        }


        // indica o arquivo EJS dentro de view a ser chamado
        return res.render('login', {
            arquivoCss: 'login.css'
        });
    },

    // logon = método do controller para processar os dados do formulário de Login
    async logon(req, res) {
        try {
          const { email, password } = req.body;
    
          const user = await User.findOne({ where: { email } });

            //verificando se o usuário existe no BD
          if (!user) {
            return res.render('login', {
                arquivoCss: 'login.css',
                error: "Usuario ou senha não existe!",
            });
          }
        
            //verificando se a senha é igual
          if (!bcrypt.compareSync(password, user.password)) {
            return res.render('login', {
                arquivoCss: 'login.css',
                error: "Usuario ou senha não existe!",
            });
          }
    
          //registrando a sessão do usuário
          req.session.user = {
            id: user.id,
            name: user.name,
            kind: user.kind,
          };
          
          //alterar posteriormente para pagina de logado
          return res.redirect("/");

          // return res.send("Usário autenticado. Definir página de interna/logado ou redirecionar para a página a home com alterações no navbar");

        } catch (err) {
          console.log(err);
          return res.render('login', {
            arquivoCss: 'login.css',
            error: "Sistema indisponivel no momento. Tente novamente em alguns instantes.",
        });
        }
      },


      // logoff = método do controller para realizar logout
    async logoff(req, res) {
      //deletando os dados da sessão
      req.session.user = null;
      //redirecionando a home
      return res.redirect("/");
      
    },

    


}

module.exports = LoginController;