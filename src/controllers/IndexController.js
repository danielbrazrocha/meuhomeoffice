let mockData = require('../mockdata/products.json');

const IndexController =  {
    // index = método do controller para renderizar uma view, chamado em index.js
    index: (req, res) => {
        // Teste de mock
        // console.log(mockData);
        // indica o arquivo EJS dentro de view a ser chamado
        return res.render('index', {
            title: 'meuhomeoffice.com',
            produtos: mockData
        });
    }
}

module.exports = IndexController;