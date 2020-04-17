const mongoose = require('mongoose');
const crypto   = require('crypto');
const jwt      = require('jsonwebtoken');
const debug    = require('debug')('app-api:users');


const userSchema = new mongoose.Schema({

    email: {                // Email should be required and unique.
        type: String,
        unique: true,
        required: true
    },
    name: {                 // Name is also required but not necessarily unique
        type: String,
        required: true
    },

    // Hash and salt are both strings.
    hash: String,
    salt: String


    /* The email and name are both set from the registration form, but the hash
       and salt are both created by the system. The hash, of course, is derived
       from the salt, and the password is supplied via the form. */

});


/* -----------------------------------------------------------------------------
    Setting a password in the User model.
    'this' in a Mongoose method refers to the model itself.
----------------------------------------------------------------------------- */
userSchema.methods.setPassword = function (password) {
    debug('Generating encrypted hash for user.');

    // Create a random string for the salt.
    this.salt = crypto.randomBytes(16).toString('hex');

    // Create an encrypted hash.
    this.hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
};


// Validating a submitted password.
userSchema.methods.validPassword = function (password) {
    debug(`Validating given password: ${password}`);

    /* Hash the provided password using crypto's pbkdf2Sync
      (password-based key derivation function 2) */
    const hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');

    // Check the password against the hash.
    return this.hash === hash;
};


/* -----------------------------------------------------------------------------
    Creating a schema method to generate a JWT (JSON Web Token)

    When this generateJwt method is called, it uses the data from the current
    user model to create a unique JWT and return it.
----------------------------------------------------------------------------- */
userSchema.methods.generateJwt = function() {
    debug(`Generating JasonWebToken`);

    const expiry = new Date();

    // Create an expiry date object, and set it for seven days.
    expiry.setDate(expiry.getDate() + 7);

    // Call the jwt.sign method, and return the token that it returns.
    return jwt.sign({

        // Pass the payload to the method.
        _id: this._id,
        email: this.email,
        name: this.name,

        // Include 'exp' as UNIX time in seconds.
        exp: parseInt(expiry.getTime() / 1000, 10),

    }, process.env.JWT_SECRET); // Send secret for hasing algorithm to use.
    // We don't keep secrets in code; we use environment variables instead.

};

mongoose.model('User', userSchema);
