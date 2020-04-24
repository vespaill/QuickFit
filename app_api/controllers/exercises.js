/* Give the controllers access to the database connection. */
const mongoose = require('mongoose');
const debug = require('debug')('app-api:ctrl/exercises')

/* Bring in the Exercise model defined in ./models/exercises.js so that we can
   interact with the Exercises collection. */
const Exercise_model = mongoose.model('Exercise');

/* GET '/'
   Retrieve all exercise documents from collection. */
const exercisesList = (req, res) => {
    Exercise_model
        .find()
        .sort('group')
        .exec((err, exercise) => {
            if (!exercise) {
                return res
                    .status(404)
                    .json('No exercises found');
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            return res
                .status(200)
                .json(exercise);
        });
};

/* POST '/'
   Create a new exercise document and insert into collection. */
const exercisesCreate = (req, res) => {
    debug('req.body: %O', req.body);
    Exercise_model
        /* Applies the create method to the model */
        .create({   /* <model_name>.create.( { <data_to_save> }, <callback> ) */
            name: req.body.name,
            equip: req.body.equip,
            group: req.body.group,
            desc: req.body.desc
        /* Callback contains appropriate responses for success/failure */
        }, (err, exercise) => {
            if (err) {
                return res
                    .status(400)
                    .send(err.message);
            } else {
                return res
                    .status(201)
                    .json(exercise);
            }
        });
};

/* GET /:id
   Retrieve an exercise document. */
const exerciseReadOne = (req, res) => {
    Exercise_model
        /* With your route being defined with an URL of '/exercise/:exerciseid'
           you can access the exerciseid parameter from inside the controller
           like this: req.params.exerciseid */

        /* Get an exerciseid from the URL parameters, and pass it to findById()
           in order to tell the Exercise_model what the query will be. */
        .findById(req.params.exerciseid)

        /*  Actually execute the query */
        .exec((err, exercise) => {/* Define callback to accept possible params*/

            /* Error trap 1: If Mongoose doesn't return an exercise, send a 404
               message and exit the function scope, using a return statement. */
            if (!exercise) {
                return res
                    .status(404)
                    .send('Exercise not found');

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
            return res
                .status(200)
                .json(exercise);
        });
};

/* PUT /:id
   Make changes to an existing exercise document. */
const exerciseUpdateOne = (req, res) => {
    const { exerciseid } = req.params;

    if (!exerciseid) {
        return res
            .status(404)
            .send('Undefined exercise ID');
    }

    Exercise_model
        .findById(exerciseid)
        .exec((err, exercise) => {
            if (!exercise) {
                return res
                    .status(404)
                    .send('Exercise not found');
            } else if (err) {
                return res
                    .status(400)
                    .json(err);
            }
            debug('req.body = %O', req.body);

            for (var p in req.body)
                exercise[p] = req.body[p]

            debug('exercise = %O', exercise);

            exercise.save((err, updatedExercise) => {   /* Save the instance */
                /* Send an appropriate response, depending on the outcome of the
                   save operation. */
                if (err) {
                    res
                        .status(404)
                        .send(err.message);
                } else {    /* Return the updated exercise */
                    res
                        .status(200)
                        .json(updatedExercise);
                }
            });
        });
};


/* DELETE /:id
   Remove an exercise document from the collection.
   Return the deleted  */
const exerciseDeleteOne = (req, res) => {
    const { exerciseid } = req.params;

    if (exerciseid) {
        Exercise_model
            .findByIdAndRemove(exerciseid)
            .exec((err, exercise) => {
                if (err) {
                    return res
                        .status(404)
                        .send(err.message);
                } else if (!exercise) {
                    return res
                        .status(404)
                        .send('Exercise not found');
                }
                res
                    .status(200)
                    .json(exercise);
                    // .send(message:`Exercise \"${exercise.name}\" DELETED`);
            });
    } else {
        res
            .status(404)
            .send('Invalid exercise ID');
    }
};

module.exports = {
    exercisesList,
    exercisesCreate,
    exerciseReadOne,
    exerciseUpdateOne,
    exerciseDeleteOne
};