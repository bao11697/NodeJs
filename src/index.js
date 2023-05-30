const express = require('express');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const sortMiddleware = require('./app/middlewares/sortMiddleware');
const app = express();
const port = 3000;
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: require('./app/helpers/handlebars'),
});

const route = require('./routers');
app.use(express.static(path.join(__dirname, 'public')));

//Conect to Db
const db = require('./config/db');
db.connect();

//Override Method
app.use(methodOverride('_method'));

app.use(sortMiddleware);

//HTTP Logger
// app.use(morgan('combined'))

//Template Engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

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
    console.log(`App listening on port ${port}`);
});
