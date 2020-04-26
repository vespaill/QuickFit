const debug = require('debug')('app:middleware/auth ---->');
const _     = require('lodash');

function auth(req, res, next) {
    if (req.session.user) {
        // debug('User exists, proceeding to page');
        next();     // If session exists, proceed to page
    } else {
        // debug('User doesn\'t exist, sending err');
        var err = new Error("Not logged in!");
        next(err);  // Error, trying to access unauthorized page!
    }
 }

function checkLogin(req, res, next) {
    res.locals.authenticated = (req.session.user)? true : false;
    debug('User: ', _.pick(req.session.user, ['email', '_id']));
    debug('Authenticated: ', res.locals.authenticated);
    next();
}

 module.exports = {
    auth,
    checkLogin
 }