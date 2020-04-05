const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');


/* -------------------------------------------------------------------------- */
/*                      Register controller for the API.                      */
/* -------------------------------------------------------------------------- */
const register = (req, res) => {

    console.log(`API—register(): req.body = ${req.body.name} ${req.body.email} ${req.body.password}`);

    // Respond with an error status if not all required fields are found.
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({
                "message": "All fields required"
            });
    }

    // Create a new user instance, and set the name and email.
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;

    // Use the setPassword method to set the salt and hash.
    user.setPassword(req.body.password);

    // Save the new user to MongoDB.
    user.save((err) => {
        if (err) {
            res
                .status(404)
                .json(err);
        } else {
            /* Generate a JWT, using the schema method, and send it to the
               browser. */
            const token = user.generateJwt();
            res
                .status(200)
                .json({
                    token
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
        return res
            .status(400)
            .json({
                "message": "All fields required"
            });
    }

    // Pass the name of the strategy and a callback to the authenticate method.
    passport.authenticate('local', (err, user, info) => {

        let token;
        // Return an error if Passport returns an error.
        if (err) {
            return res
                .status(404)
                .json(err);
        }
        // If Passport returned a user instance, generate and send a JWT.
        if (user) {
            token = user.generateJwt();
            res
                .status(200)
                .json({
                    token
                });
        // Otherwise, return an info message (why authentication failed).
        } else {
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