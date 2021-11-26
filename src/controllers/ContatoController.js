const ContatoController =  {
    // index = método do controller para renderizar uma view, chamado em index.js
    index: (req, res) => {
        // indica o arquivo EJS dentro de view a ser chamado
        return res.render('contato', {
            arquivoCss: 'contato.css'
        });
    }
}

module.exports = ContatoController;