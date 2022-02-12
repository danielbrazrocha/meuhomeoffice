const { Product } = require('../models');
//let mockData = require('../mockdata/products.json');

const ProdutoController =  {
    // index = método do controller para renderizar uma view, chamado em index.js
    async detalhesProduto(req, res, next) {
        //verificando se existe uma sessão de usuário ativa, passando globalmente a variavel user para a view
        //deverá ser feito esta operação a cada route que utilize o middleware de autenticação isAuth
        const {user} = req.session;


        // chama detalhes do produto passado na URL
        let produtoId = req.params.id;
        const produto = await Product.findOne({
            where: {
                id: produtoId
            }
        });

        // renderiza view se o produto existir

        if (produto) {
            return res.render('produto', {
                arquivoCss: 'produto.css',
                produto: produto
    
            });
        } else {
            return res.status(404).render('404', {
                textoErro: 'Produto não encontrado, refaça sua busca ou tente novamente'
            });
        }
    }

}

module.exports = ProdutoController;