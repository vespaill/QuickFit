const debug = require('debug')('app-svr:middleware/auth ---->');

module.exports = function auth(req, res, next) {
    if (req.session.user) {
        debug('User:', req.session.user);
        next();     // If session exists, proceed to page
    } else {
        var err = new Error("Not logged in!");
        next(err);  // Error, trying to access unauthorized page!
    }
 }