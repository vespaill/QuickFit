const express = require('express');
const router = express.Router();
const ctrlExercises = require('../controllers/exercises');

// Define http requests such as GET and POST
// For various URLs like /exercises, etc
router
    .route('/exercises')
    .get(ctrlExercises.exercisesList)
    .post(ctrlExercises.exercisesCreate);

router
    .route('/exercise/:exerciseid')
    .get(ctrlExercises.exerciseReadOne)
    .put(ctrlExercises.exerciseUpdateOne)
    .delete(ctrlExercises.exerciseDeleteOne);

module.exports = router;