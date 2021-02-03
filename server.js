// require modules
const express = require('express');
const mongo = require('./config/database');
const logger = require('morgan');
const methodOverride = require('method-override');
require('./config/passport')

const session = require('express-session');
const passport = require('passport');

const PORT = 3000;

const homeRouter = require('./routes/home');
const profileRouter = require('./routes/profile');

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

app.use(session({
    secret: 'tucker',
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session ());

app.use(mongo, homeRouter);

// root path http:localhost:3000/drop
app.use('/', homeRouter);
app.use('/profile', profileRouter);

// Tell the app to listen
app.listen(PORT, () => {
    console.log(`Express is listening at port ${PORT}`);
});