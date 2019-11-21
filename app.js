const express = require('express')
const consign = require('consign')
const path = require('path')

// Instancia e habilita todas as funcionalidades do Servidor e funcionalidades do Express, também.
const app = express()

app.set('views', path.join(__dirname, 'views'))// Indica o diretório de Views
app.set('view engine', 'ejs')// Indica o Template Engine - EJS-Embedded JavaScript

// Middlewares
app.use(express.static(path.join(__dirname, 'public')))// Indica pasta para servir arquivos estáticos

// Carrega Módulos de Diretórios
/*
  É importante colocar em ordem os diretórios a serem carregados
  pela função consign(). Neste caso, os models são carregados primeiro,
  para que os controllers possam usá-los e, por último, os routes usarem
  toda a lógica de seus controllers
 */
consign({})
  .include('models')
  .then('controllers')
  .then('routes')
  .into(app)

// Coloca a aplicação no ar utilizando a porta abaixo.
app.listen(3000, () => {
  console.log('Ntalk no ar.')
})