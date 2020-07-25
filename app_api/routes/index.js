const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth').auth;
const admin = require('../../middleware/admin');

const ctrlExercises = require('../controllers/exercises');
const ctrlPrograms = require('../controllers/programs');
const ctrlUsers = require('../controllers/users');
const ctrlLogins = require('../controllers/logins');

/* ----------------------------- Exercises API ------------------------------ */
router
  .route('/exercises')
  .get(ctrlExercises.exercisesList)
  .post(ctrlExercises.exercisesCreate);

router
  .route('/exercises/:exerciseid')
  .get(ctrlExercises.exerciseReadOne)
  .put(ctrlExercises.exerciseUpdateOne)
  .delete(auth, ctrlExercises.exerciseDeleteOne);

/* ------------------------------ Programs API ------------------------------ */
/* Program ID is part of the request body */
router
  .route('/programs')
  .get(ctrlPrograms.programList)
  .post(ctrlPrograms.programAddExercise)
  .delete(ctrlPrograms.programDeleteExercise);

/* ------------------------------- Users API -------------------------------- */
router.route('/users').get(ctrlUsers.getUsers).post(ctrlUsers.registerUser);

// UserID is retreived via the request's session rather than the path
router
  .route('/users/program')
  .get(ctrlUsers.getUserProgram)
  .post(ctrlUsers.addExerciseToUserProgram)
  .delete(ctrlUsers.deleteExerciseFromUserProgram);

router
  .route('/users/:userid')
  .get(ctrlUsers.getUser)
  .put(ctrlUsers.updateUser)
  .delete(ctrlUsers.deleteUser);

router.route('/users/:userid/exercises').post(ctrlUsers.addExerciseToUser);

router
  .route('/users/:userid/exercises/:exerciseid')
  .get(ctrlUsers.getOneUserExercise)
  .delete(ctrlUsers.deleteOneUserExercise);

/* ------------------------------- Logins API ------------------------------- */

router.route('/logins').post(ctrlLogins.loginUser);

module.exports = router;
