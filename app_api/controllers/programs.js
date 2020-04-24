const mongoose = require('mongoose');

const Program_model = mongoose.model('Program');
const Exercise_model = mongoose.model('Exercise');

/**
 * Appends all programs in DB to the response body.
 * @param {*} req
 * @param {*} res
 */
const programList = (req, res) => {
    Program_model
        .find()
        .populate('exercises.exercise')
        .exec((err, programs) => {
            if (!programs) {
                return res
                    .status(400)
                    .send('No programs found');

            } else if (err) {
                return res
                    .status(400)
                    .json(err);
            }
            res
                .status(200)
                .json(programs);
        });
};

/**
 * Adds an exercise to a program and adds the saved exercise to the
 * response body.
 * @param {*} req Should have the following information
 *                  programId
 *                  exerciseId
 *                  dayOfWeek
 *                  reps
 *                  weight
 * @param {*} res
 */
const programAddExercise = (req, res) => {
    if (req.body["programId"] == undefined ||
        req.body["exerciseId"] == undefined ||
        req.body["dayOfWeek"] == undefined ||
        req.body["reps"] == undefined ||
        req.body["weight"] == undefined) {
        return res
            .status(400)
            .send('Bad request');
    }
    // This whole method can be simplified to 3 lines
    // Doing it the long way is less efficient but allows
    // us to return the added exercise which is necessary
    Program_model.findById(req.body.programId).exec((err, program) => {
        if (!program) {
            // Program not found with provided ID
            return res
                .status(400)
                .json('Program not found');
        } else if (err) {
            return res
                .status(400)
                .json(err);
        }
        // Find the exercise
        Exercise_model.findById(req.body.exerciseId).exec((err, exercise) => {
            if (!exercise) {
                // Exercise not found with provided ID
                return res
                    .status(400)
                    .send('Exercise not found');
            } else if (err) {
                return res
                    .status(400)
                    .json(err);
            }
            // Program and exercise found, add the exercise to the program
            var index = program.exercises.push({
                exercise: exercise,
                reps: req.body.reps,
                weight: req.body.weight,
                dayOfWeek: req.body.dayOfWeek,
            }) - 1;
            // Save the changes
            program.save((err, updatedProgram) => {
                if (err) {
                    res
                        .status(400)
                        .json(err);
                } else {
                    // Return the saved exercise
                    res
                        .status(200)
                        .json(updatedProgram.exercises[index]);
                }
            });
        });
    });
};

/**
 * Removes an exercise from a program
 * @param {*} req Should have the following information
 *                  programId
 *                  entryId -> id of the exercise, reps, weight, ... object
 * @param {*} res
 */
const programDeleteExercise = (req, res) => {
    if (req.body["programId"] == undefined ||
        req.body["entryId"] == undefined) {
        return res
            .status(400)
            .send('Bad request');
    }

    Program_model.updateOne({ _id: req.body.programId }, { $pull: { exercises: { _id: req.body.entryId } } }, (err, program) => {
        if (err) {
            return res
                .status(400)
                .json(err);
        }
        res
            .status(204)
            .json(null);
    });
};

module.exports = {
    programList,
    programAddExercise,
    programDeleteExercise
};