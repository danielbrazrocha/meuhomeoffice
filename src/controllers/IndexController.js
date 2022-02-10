const { Product } = require('../models');


const IndexController =  {
    // index = método do controller para renderizar uma view, chamado em index.js
    async index(req, res, next) {
        try {
            const productList = await Product.findAll({
                where: {
                    deletedAt: null
                }
            });

            // console.log(productList);
            
            // indica o arquivo EJS dentro de view a ser chamado
            return res.render('index', {
                title: 'meuhomeoffice.com',
                produtos: productList
            });
        } catch (error) {
            return res.status(400).json({ message: 'Error' + error});
        }
    }
    
};

module.exports = IndexController;