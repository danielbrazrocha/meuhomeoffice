const { User } = require('../models');
const bcrypt = require("bcryptjs");
const { validationResult } = require('express-validator');

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

    // register = método do controller para enviar os dados do formulário de cadastro
    async register(req, res, next) {
        // console.log(validationResult(req));
        //criando a variável para armazenar os erros de validação
        console.log('chamando register no controller aqui');
        let errors = validationResult(req);

        //verificando se há erros de validação
        if (errors.isEmpty()) {
            
            // Desestruturando as informações para utilização no sequelize
            const { nome, cpf, tel, email, senha, repeteSenha } = req.body;


            // Encriptando a senha
            const passCrypt = bcrypt.hashSync(senha, 10);
    
            try {

                //vericando se o email já existe no banco de dados
                const hasSameUserName = await User.findOne({ where: { email } });
                if (hasSameUserName) {
                    return res.render('cadastro', {
                        arquivoCss: 'cadastro.css',
                        error: "Já existe um usuário cadastrado com este email.",
                        old: req.body
                    });
                }

                //vericando se o CPF já existe no banco de dados
                const hasSameCpf = await User.findOne({ where: { cpf } });
                if (hasSameCpf) {
                    return res.render('cadastro', {
                        arquivoCss: 'cadastro.css',
                        error: "Já existe um usuário cadastrado com este CPF.",
                        old: req.body
                    });
                }



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
    //caso existam erros na validação, renderizar a view com os erros
    }   else {
        //caso existam erros na validação, renderizar a view com os erros
        return res.render('cadastro', {
            arquivoCss: 'cadastro.css',
            errors: errors.errors,
            old: req.body
        });
    }
          },
}

module.exports = CadastroController;