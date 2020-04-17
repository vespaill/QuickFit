const express       = require('express');
const router        = express.Router();
const ctrlExercises = require('../controllers/exercises');
const ctrlPrograms  = require('../controllers/programs');
const ctrlAuth      = require('../controllers/authentication');

// Define http requests such as GET and POST
// For various URLs like /exercises, etc
router.route('/exercises')
    .get(ctrlExercises.exercisesList)
    .post(ctrlExercises.exercisesCreate);

router.route('/exercise/:exerciseid')
    .get(ctrlExercises.exerciseReadOne)
    .put(ctrlExercises.exerciseUpdateOne)
    .delete(ctrlExercises.exerciseDeleteOne);

// Program ID is part of the request body
router.route('/programs')
    .get(ctrlPrograms.programList)
    .post(ctrlPrograms.programAddExercise)
    .delete(ctrlPrograms.programDeleteExercise);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;