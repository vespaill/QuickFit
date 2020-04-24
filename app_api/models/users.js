const mongoose = require('mongoose');
const crypto   = require('crypto');
const debug    = require('debug')('app-api:models/users  ');

const userSchema = new mongoose.Schema({
    email: {            /* Email should be required and unique. */
        type: String,
        unique: true,
        required: true
    },
    name: {             /* Name is also required but not necessarily unique */
        type: String,
        required: true
    },

    /* Hash and salt are both strings. */
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

    /* Create a random string for the salt. */
    this.salt = crypto.randomBytes(16).toString('hex');

    /* Create an encrypted hash. */
    this.hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
};


/* Validating a submitted password. */
userSchema.methods.validPassword = function (password) {
    debug('Validating given password: %s', password);

    /* Hash the provided password using crypto's pbkdf2Sync
      (password-based key derivation function 2) */
    const hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');

    /* Check the password against the hash. */
    return this.hash === hash;
};


mongoose.model('User', userSchema);
