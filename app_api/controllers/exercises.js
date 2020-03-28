// Gives the controllers access to the database connection.
const mongoose = require('mongoose');

/* Bring in the Exercise model defined in ./models/exercises.js so that you can
   interact with the Exercises collection. */
const Exercise_model = mongoose.model('Exercise');

/* Placeholder functions to enable the app to start while we figure out how to
   write the API functionality. */
const exercisesList = (req, res) => { };
const exercisesCreate = (req, res) => { };

const exerciseReadOne = (req, res) => {

    Exercise_model
        /* With your route being defined with an URL of '/exercise/:exerciseid'
           you can access the exerciseid parameter from inside the controller
           like this: req.params.exerciseid */

        // Get an exerciseid from the URL parameters, and pass it to findById()
        // in order to tell the Exercise_model what the query will be.
        .findById(req.params.exerciseid)

        // Execute the query
        .exec((err, exercise) => {  // Define callback to accept possible params

            /* Error trap 1: If Mongoose doesn't return an exercise, send a 404
               message and exits the function scope, using a return statement */
            if (!exercise) {
                return res
                    .status(404)
                    .json({
                        "message": "exercise not found"
                    });

            /* Error trap 2: If Mongoose returns an error, send it as a 404
               response and exit the controller, using a return statement. */
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            }

            /* If Mongoose doesn't error, continue as before, and send an
               exercise object in a HTTP status response of 200 (which means a
               successful GET or PUT request).  */
            res
                .status(200)
                .json(exercise);
        });
}

const exerciseUpdateOne = (req, res) => { }
const exerciseDeleteOne = (req, res) => { };

module.exports = {
    exercisesList,
    exercisesCreate,
    exerciseReadOne,
    exerciseUpdateOne,
    exerciseDeleteOne
};