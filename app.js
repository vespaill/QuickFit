/* -----------------------------------------------------------------------------
Express is a routing and middleware web framework that has minimal functionality
of its own: An Express application is essentially a series of middleware
function calls.

Middleware functions are functions that have access to the request object (req),
the response object (res), and the next middleware function in the application's
request-response cycle. The next middleware function is commonly denoted by a
variable named next.

The req object represents the HTTP request and has properties for the request
query string, parameters, body, HTTP headers, and so on.

Learn more at https://expressjs.com/en/4x/api.html
          and https://expressjs.com/en/guide/using-middleware.html
----------------------------------------------------------------------------- */

require('dotenv').config({ path: '.env' }); // env vars - store SECRET & options
const createError = require('http-errors'); // Create HTTP errors for Express
const express = require('express');         // Load Express module
const path = require('path');               // For working w/ file & dir paths
const logger = require('morgan');           // log requests
const bodyParser = require('body-parser');  // Parse incoming data payloads
const errorHandler = require('./middleware/error');
const session = require('express-session');
const dbURI = require('./app_api/models/db').getDbURI(); // DB connection & schemas
const MongoStore = require('connect-mongo')(session);

/* Include our routers */
const indexRouter = require('./app_server/routes/index');
const apiRouter = require('./app_api/routes/index');

/* Call the Express function, this returns an object of type "Express"
   By convention we call this object "app." This represents our application.
   This app object has many useful methods like get, post, put and delete. */
const app = express();

app.locals.site = { name: 'QuickFit' };

// Look for views in /app_server/views.
app.set( 'views', path.join(__dirname, 'app_server', 'views') );

// Use the pug template engine.
app.set('view engine', 'pug');

// Log CRUD requests in terminal
// app.use(logger('dev'));

// Parse incoming requests with JSON payloads.
app.use(bodyParser.json());

// Parse incoming requests w/ urlencoded payloads
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files(images,css,js) from ./public
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    store: new MongoStore({
      url: dbURI,
      autoReconnect: true
    })
  })
);

app.use(require('./middleware/auth').checkLogin);

// Use our routers
app.use('/', indexRouter);
app.use('/api', apiRouter);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});
app.use(errorHandler);

module.exports = app;
