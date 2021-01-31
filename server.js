// require modules
const express = require('express');
const mongo = require('./config/database');
const logger = require('morgan');
const methodOverride = require('method-override');
const PORT = 3000;

const homeRouter = require('./routes/home');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

// set up express app
const app = express();

// connect to DB

// configure express app app.set()
app.set('view engine', 'ejs');

// mount middleware
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(mongo, homeRouter);

// root path http:localhost:3000/drop
app.use('/', homeRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

// Tell the app to listen
app.listen(PORT, () => {
    console.log(`Express is listening at port ${PORT}`);
});