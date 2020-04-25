const debug = require('debug')('app-svr:middleware/auth ---->');

function auth(req, res, next) {
    if (req.session.user) {
        debug('User:', req.session.user);
        next();     // If session exists, proceed to page
    } else {
        var err = new Error("Not logged in!");
        next(err);  // Error, trying to access unauthorized page!
    }
 }

// function checkLogin(err, req, res, next) {
//     var logged_in = false;
//     if (req.session.userId) {
//         res.locals.logged_in = true;
//     }
//     next(err);
// }

 module.exports = {
    auth,
    // checkLogin
 }