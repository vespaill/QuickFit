const express       = require('express');
const router        = express.Router();
const ctrlExercises = require('../controllers/exercises');
const ctrlPrograms  = require('../controllers/programs');
const ctrlUsers     = require('../controllers/users');


/* ----------------------------- Exercises API ------------------------------ */
router.route('/exercises/')
    .get(ctrlExercises.exercisesList)
    .post(ctrlExercises.exercisesCreate);

router.route('/exercises/:exerciseid')
    .get(ctrlExercises.exerciseReadOne)
    .put(ctrlExercises.exerciseUpdateOne)
    .delete(ctrlExercises.exerciseDeleteOne);


/* ------------------------------ Programs API ------------------------------ */
/* Program ID is part of the request body */
router.route('/programs')
    .get(ctrlPrograms.programList)
    .post(ctrlPrograms.programAddExercise)
    .delete(ctrlPrograms.programDeleteExercise);


/* ------------------------------- Users API -------------------------------- */
router.route('/users')
    .get(ctrlUsers.getUsers)
    .post(ctrlUsers.registerUser);

router.route('/users/:userid')
    .get(ctrlUsers.getUser)
    // .put(ctrlUsers.updateUser)
    .delete(ctrlUsers.deleteUser);


module.exports = router;