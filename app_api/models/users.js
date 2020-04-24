const mongoose = require('mongoose');
const crypto   = require('crypto');
const jwt      = require('jsonwebtoken');
const debug    = require('debug')('app-api:models/users --->');

const userSchema = new mongoose.Schema({
    name: {             /* Name is also required but not necessarily unique */
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    email: {            /* Email should be required and unique. */
        type: String,
        unique: true,
        required: true
    },

    /* Hash and salt are both strings. */
    /* The email and name are both set from the registration form, but the hash
       and salt are both created by the system. The hash is derived from a salt
       and a password. The salt is a randomly generated string and the password
       is supplied via the form. */
    hash: String,
    salt: String,

    isAdmin: {
        type: Boolean,
        default: false
    }
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

userSchema.methods.generateJwt = function () {
    const token = jwt.sign( {
        _id: this._id,
        isAdmin: this.isAdmin
    }, process.env.JWT_SECRET );
    return token;
};


mongoose.model('User', userSchema);
