const mongoose = require('mongoose');
const Exercise_model = mongoose.model('Exercise');

/* Placeholder functions to enable the app to start while we figure out how to
   write the API functionality. */
const exercisesList = (req, res) => { };
const exercisesCreate = (req, res) => { };
const exerciseReadOne = (req, res) => { }
const exerciseUpdateOne = (req, res) => { }
const exerciseDeleteOne = (req, res) => { };

module.exports = {
    exercisesList,
    exercisesCreate,
    exerciseReadOne,
    exerciseUpdateOne,
    exerciseDeleteOne
};