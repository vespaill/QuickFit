require('dotenv').config( {path: '.env'} );
const createError  = require('http-errors');
const express      = require('express');
const path         = require('path');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const passport     = require('passport');   // Require Passport before the model definition
require('./app_api/models/db');
require('./app_api/config/passport');       // Require strategy after the model definition


const indexRouter = require('./app_server/routes/index');
const apiRouter = require('./app_api/routes/index');

const app = express();

/* -------------------------------------------------------------------------- */
/*                              view engine setup                             */
/* -------------------------------------------------------------------------- */

// Tell Express to look for views in /app_server/views
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Tell Express to use the pug template engine.
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use( express.static( path.join(__dirname, 'public') ) );

// Initialize passport and add it as middleware.
app.use(passport.initialize());

app.use('/api', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});
app.use('/', indexRouter);;
app.use('/api', apiRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;