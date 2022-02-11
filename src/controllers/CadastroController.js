const { User } = require('../models');
const bcrypt = require("bcryptjs");

// let validaCpf = require('')
const CadastroController =  {

    // showRegister = método do controller para renderizar a view com os forms de cadastro,
    // chamado em index.js
    showRegister: (req, res) => {
        // indica o arquivo EJS dentro de view a ser chamado
        return res.render('cadastro', {
            arquivoCss: 'cadastro.css',
        });
    },

    // register = método do controller para evniar os dados do formulário de cadastro
    async register(req, res, next) {
        // Desestruturando as informações para utilização no sequelize
        const { nome, cpf, tel, email, senha, repeteSenha } = req.body;
        console.log(req.body)
        console.log("--req.body--")

        //Verificação se todos os campos estão preenchidos
        if (!nome || !cpf || !tel || !email || !senha || !repeteSenha) {
            return res.render('cadastro', {
                arquivoCss: 'cadastro.css',
                error: 'Preencher todos os campos e tentar novamente.'
            });
        }

        //Dupla verificação no backend se as duas senhas são iguais
        if (senha != repeteSenha) {
            return res.render('cadastro', {
                arquivoCss: 'cadastro.css',
                error: 'Senhas não conferem'
            });
        }

        // Encriptando a senha
        const passCrypt = bcrypt.hashSync(senha, 10);
    
        try {
            const user = await User.create({
                kind: 'user',
                name: nome,
                cpf,
                tel,
                email,
                password: passCrypt,
                createAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            });

            //verificando se o usuário foi criado existe no BD
            if (!user) {
                return res.render('cadastro', {
                    arquivoCss: 'cadastro.css',
                    error: "Erro na criação do usuário. Verifique as informações e tente novamente.",
                });
            }
    
            return res.render('cadastro', {
                arquivoCss: 'cadastro.css',
                sucess: "Usuário criado com sucesso. Faça o login para continuar.",
            });
        } catch (err) {
            console.log(err);
            return res.render('cadastro', {
                arquivoCss: 'cadastro.css',
                error: "Sistema indisponivel no momento. Tente novamente em alguns instantes.",
            });
        }
      },
}

module.exports = CadastroController;