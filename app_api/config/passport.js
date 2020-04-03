const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');

// Passport local strategy definition
passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    // Search MongoDB for a user with the supplied email address.
    (username, password, done) => {
        User.findOne({ email: username }, (err, user) => {

            if (err) { return done(err); }

            // If no user is found, return false and a message.
            if (!user) {
                return done(null, false, {
                    message: 'Incorrect username.'
                });
            }

            // Call the validPassword method, passing the supplied password.
            if ( !user.validPassword(password) ) {
                // If the password is incorrect, return false and a message.
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }
            // If you've reached the end, you can return the user object
            return done(null, user);

        });
    }
));