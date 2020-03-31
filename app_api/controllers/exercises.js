// Gives the controllers access to the database connection.
const mongoose = require('mongoose');

/* Bring in the Exercise model defined in ./models/exercises.js so that you can
   interact with the Exercises collection. */
const Exercise_model = mongoose.model('Exercise');

// List all the exercises in the Exercise collection.
const exercisesList = (req, res) => {
    Exercise_model
        .find()
        .exec((err, exercise) => {
            if (!exercise) {
                return res
                    .status(404)
                    .json({
                        "message": "no exercises found"
                    });

            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            res
                .status(200)
                .json(exercise);
        });
};

// Controller for creating a new exercise
const exercisesCreate = (req, res) => {
    Exercise_model

        // Applies the create method to the model
        .create({      // <model_name>.create.( { <data_to_save> }, <callback> )

            name: req.body.name,
            equip: req.body.equip,
            group: req.body.group,
            desc: req.body.desc

        // Callback function contains appropriate responses for success/failure
        }, (err, exercise) => {
            if (err) {
                res
                    .status(400)
                    .json(err);
            } else {
                res
                    .status(201)
                    .json(exercise);
            }
        });
};

const exerciseReadOne = (req, res) => {

    Exercise_model
        /* With your route being defined with an URL of '/exercise/:exerciseid'
           you can access the exerciseid parameter from inside the controller
           like this: req.params.exerciseid */

        // Get an exerciseid from the URL parameters, and pass it to findById()
        // in order to tell the Exercise_model what the query will be.
        .findById(req.params.exerciseid)

        // Actually execute the query
        .exec((err, exercise) => {  // Define callback to accept possible params

            /* Error trap 1: If Mongoose doesn't return an exercise, send a 404
               message and exit the function scope, using a return statement. */
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
               exercise object inside an HTTP status response of 200 (which
               means a successful GET or PUT request).  */
            res
                .status(200)
                .json(exercise);
        });
};

// Making changes to an existing document in MongoDB
const exerciseUpdateOne = (req, res) => {
    if (!req.params.exerciseid) {
        return res
            .status(404)
            .json({
                "message": "Not found, exercise is required"
            });
    }
    Exercise_model
        .findById(req.params.exerciseid)
        .exec((err, exercise) => {
            if (!exercise) {
                return res
                    .json(404)
                    .status({
                        "message": "exerciseid not found"
                    });
            } else if (err) {
                return res
                    .status(400)
                    .json(err);
            }
            exercise.name = req.body.name;
            exercise.equip = req.body.equip.split(",");
            exercise.group = req.body.group;
            exercise.desc = req.body.desc;

            exercise.save((err, loc) => {   // Save the instance
                /* Send an appropriate response, depending on the outcome of the
                   save operation. */
                if (err) {
                    res
                        .status(404)
                        .json(err);
                } else {
                    res
                        .status(200)
                        .json(loc);
                }
            });
        });
};


// Deleting a document from MongoDB, given an ID
const exerciseDeleteOne = (req, res) => {

    const {exerciseid} = req.params;

    if (exerciseid) {
        Exercise_model
            .findByIdAndRemove(exerciseid)
            .exec((err, exercise) => {
                if (err) {
                    return res
                        .status(404)
                        .json(err);
                }
                res
                    .status(204)
                    .json(null);
            });
    } else {
        res
            .status(404)
            .json({
                "message": "No Exercise"
            });
    }

};

module.exports = {
    exercisesList,
    exercisesCreate,
    exerciseReadOne,
    exerciseUpdateOne,
    exerciseDeleteOne
};