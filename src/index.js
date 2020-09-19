const express = require('express')
const app     = express()
const path    = require('path')

// settings
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.set('port', process.env.PORT || 8080);

// routes
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/tienda', (req, res) => {
  res.render('tienda')
})

app.get('/info', (req, res) => {
  res.render('info')
})

app.get('/contacto', (req, res) => {
  res.render('contacto')
})

// public files
app.use(express.static(path.join(__dirname, 'publics')))

// server
app.listen(app.get('port'), () => {
  console.log('Server is connected in the port', app.get('port'))
})
