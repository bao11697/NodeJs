const express = require('express')
const morgan = require('morgan')
const path = require('path')
const exphbs = require('express-handlebars')
const hbs = exphbs.create({defaultLayout: 'main', extname: '.hbs'});
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')))

//HTTP Logger
app.use(morgan('combined'))


//Template Engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname,'resources/views'))



app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})