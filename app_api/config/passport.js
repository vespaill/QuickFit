const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose      = require('mongoose');
const User          = mongoose.model('User');
const debug         = require('debug')('app-api:passport');

// Passport local strategy definition
passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField : 'password'
    },
    // Search MongoDB for a user with the supplied email address.
    (username, password, done) => {
        debug('Looking for user with supplied email:', username);
        User.findOne({ email: username }, (err, user) => {

            if (err) {
                debug('err');
                return done(err);
            }

            // If no user is found, return false and a message.
            if (!user) {
                debug('User not found');
                return done(null, false, {
                    message: 'Incorrect username.'
                });
            }

            // Call the validPassword method, passing the supplied password.
            if ( !user.validPassword(password) ) {
                debug('Incorrect password');

                // If the password is incorrect, return false and a message.
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }
            // If you've reached the end, you can return the user object
            debug(`User found: ${user}\nreturning`);
            return done(null, user);

        });
    }
));

passport.serializeUser((user, done) => {
    debug('In serializeUser...');
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    debug('In deserializeUser...');
    User.findById(id, function (err, user) {
        done(err, user)
    });
});