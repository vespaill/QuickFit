const express = require('express');
const router = express.Router();
const ctrlExercises = require('../controllers/exercises');

router
    .route('/exercises')
    .get(ctrlExercises.exercisesList)
    .post(ctrlExercises.exercisesCreate);

module.exports = router;