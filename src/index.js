const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ defaultLayout: 'main', extname: '.hbs' });
const app = express();
const port = 3000;

const route = require('./routers');
app.use(express.static(path.join(__dirname, 'public')));

//HTTP Logger
// app.use(morgan('combined'))

//Template Engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Sử dụng midleware để dọc được body .
// Form
app.use(
    express.urlencoded({
        extended: true,
    }),
);
//Code JS
app.use(express.json());

// Router init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
