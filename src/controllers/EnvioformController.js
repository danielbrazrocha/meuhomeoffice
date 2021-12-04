const EnvioformController =  {
  // index = método do controller para renderizar uma view, chamado em index.js
  index: (req, res) => {
      // indica o arquivo EJS dentro de view a ser chamado
      return res.render('envioform', {
          arquivoCss: 'envioform.css'
      });
  }
}

module.exports = EnvioformController;