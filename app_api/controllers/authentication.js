const passport   = require('passport');
const mongoose   = require('mongoose');
const debug      = require('debug')('app-api:auth');
const User_model = mongoose.model('User');

/* -------------------------------------------------------------------------- */
/*                      Register controller for the API.                      */
/* -------------------------------------------------------------------------- */
const register = (req, res) => {

    debug(`req.body: ${JSON.stringify(req.body,  null, '\t')}`);

    // Respond with an error status if not all required fields are found.
    if (!req.body.name || !req.body.email || !req.body.password) {
        debug('Undefined name, email or password\nSending 400');
        return res
            .status(400)
            .json({
                "message": "All fields required"
            });
    }

    debug('Creating new user instance...');
    // Create a new user instance, and set the name and email.
    const user = new User_model();
    user.name = req.body.name;
    user.email = req.body.email;

    // Use the setPassword method to set the salt and hash.
    debug('Calling user.setPassword()...');
    user.setPassword(req.body.password);

    // Save the new user to MongoDB.
    debug('Calling user.save()...');
    user.save((err) => {
        if (err) {
            // MongoError: E11000 duplicate key error collection.
            if (err.code === 11000) {
                debug('MongoError: E11000 duplicate key error collection\nSending 409');
                res
                    .status(409)
                    .json(err);
            // generic error
            } else {
                debug('Generic error\nSending 404');
                res
                    .status(404)
                    .json(err);
            }
        } else {
            debug('Successful save of new user\nSending 200');
            res
                .status(200)
                .json({
                    "message": "Successfully registered new user"
                });
        }
    });

};


/* -------------------------------------------------------------------------- */
/*                        Login controller for the API                        */
/* -------------------------------------------------------------------------- */
const login = (req, res) => {

    // Validate that the required fields have been supplied.
    if (!req.body.email || !req.body.password) {
        debug('Undefined email or password\nSending 400')
        return res
            .status(400)
            .json({
                "message": "All fields required"
            });
    }

    // Pass the name of the strategy and a callback to the authenticate method.
    passport.authenticate('local', (err, user, info) => {
        // Return an error if Passport returns an error.
        if (err) {
            debug('Generic error\nSending 404')
            return res
                .status(404)
                .json(err);
        }
        // If Passport returned a user instance, generate and send a JWT.
        if (user) {
            debug('User authenticated\nCalling generateJwt()');
            const token = user.generateJwt();
            debug(`Sending 200 & token: ${token}`);
            res
                .status(200)
                .json({
                    token
                });
        // Otherwise, return an info message (why authentication failed).
        } else {
            debug('Authentication failed\nSending 401 & info')
            res
                .status(401)
                .json(info);
        }

    }) (req, res);  // Make sure that req and res are available to Passport.

};

module.exports = {
    register,
    login
};