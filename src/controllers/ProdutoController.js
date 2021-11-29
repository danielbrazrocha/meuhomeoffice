let mockData = require('../mockdata/products.json');

const ProdutoController =  {
    // index = método do controller para renderizar uma view, chamado em index.js
    detalhesProduto: (req, res) => {
        // chama detalhes do produto passado na URL
        let produtoId = req.params.id;
        let produto = mockData.find(produto => produto.id == produtoId);
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