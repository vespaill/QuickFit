const mongoose = require('mongoose');
const crypto   = require('crypto');
const debug    = require('debug')('app-api:models/users --->');
const server   = (require('../../globals').getServer)();
const request  = require('request');
const _        = require('lodash');

const Exercise_model = mongoose.model('Exercise');
const Program_model = mongoose.model('Program');

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
    },

    exercises: [Exercise_model.schema],
    program: Program_model.schema,
    weight: {
        type: Number,   /* kg */
        min: 1,
        max: 700,
        default: 80
    },
    height: {
        type: Number,   /* centimeters */
        min: 30,
        max: 300,
        default: 180
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        default: 'other'
    },
    age: {
        type: Number,
        min: 0,
        max: 150,
        default: 20
    },
    activityLevel: {
        type: Number,
        min: 1,
        max: 2,
        default: 1.5
    },
    // fitness goals
    // workout volume
    // workout intensity
});


/* -----------------------------------------------------------------------------
    Makes a GET request to the exercises API in order to populate the user's
    exercises.
----------------------------------------------------------------------------- */
userSchema.methods.populateExercises = function () {
    debug('Populating user\'s exercise collection...')
    request({
        url: `${server}/api/exercises`,
        method: 'GET',
        json: {}
    }, (err, response, body) => {
        for (i = 0; i < body.length; i++) {
            debug(_.pick(body[i], 'name'));
            this.exercises.push( new Exercise_model(body[i]) );
        }
        this.save();
    })
}

/* -----------------------------------------------------------------------------
    Initialize the user's program
----------------------------------------------------------------------------- */
userSchema.methods.createProgram = function () {
    debug('Creating a program for the user...')
    this.program = new Program_model();
}



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

    /* Hash the provided password using crypto's pbkdf2Sync which stands for
      'password-based key derivation function 2' */
    const hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');

    /* Check the password against the hash. */
    return this.hash === hash;
};

mongoose.model('User', userSchema);
