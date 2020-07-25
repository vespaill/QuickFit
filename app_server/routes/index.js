const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth').auth;
const ctrlPublic = require('../controllers/public');
const ctrlExercises = require('../controllers/exercises');
const ctrlUsers = require('../controllers/users');

/* ------------------------------ Public pages ------------------------------ */
router.get('/', ctrlPublic.intro);
router.get('/questionnaire', ctrlPublic.questionnaire);
router.get('/program-list', ctrlPublic.program_list);
router.get('/exercise-list', ctrlExercises.getPublicExercises);
router.get('/exercise/:exerciseid', ctrlExercises.exerciseInfo);

/* -------------------- User login & registration pages. -------------------- */
router
  .route('/register-form')
  .get(ctrlUsers.renderRegisterForm)
  .post(ctrlUsers.registerUser);
router
  .route('/login-form')
  .get(ctrlUsers.renderLoginForm)
  .post(ctrlUsers.doLoginUser);
router.get('/logout', ctrlUsers.logoutUser);

/* ------------------------- Protected user pages. -------------------------- */
router.get('/dashboard', auth, ctrlUsers.dashboard);
router.get('/dashboard/calendar', auth, ctrlUsers.calendar);
router.get('/dashboard/exercise-list', auth, ctrlUsers.getUserExercises);
router.get('/dashboard/exercise/:exerciseid', auth, ctrlUsers.getOneUserExercise);
router
  .route('/dashboard/exercise-list/add')
  .get(auth, ctrlUsers.renderExerciseForm)
  .post(auth, ctrlUsers.createUserExercise);
router
  .route('/dashboard/personal-info')
  .get(auth, ctrlUsers.getUserPersonalInfo)
  .post(auth, ctrlUsers.updateUserPersonalInfo);
router.route('/dashboard/account').get(auth, ctrlUsers.getUserAccountInfo);
router.get('/saveQnrAnswersToUser', ctrlUsers.saveQnrAnswersToUser);

module.exports = router;
