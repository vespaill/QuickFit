const express = require('express');
const router = express.Router();
const ctrlPublic = require('../controllers/public');
const ctrlUser = require('../controllers/user_specific_pages');
const ctrlExercises = require('../controllers/exercises');
const ctrlAuth = require('../controllers/authentication');

/* Define URL for different pages. */
router.get('/', ctrlPublic.intro);
router.get('/login', ctrlPublic.login);
router.get('/qnr1', ctrlPublic.qnr1);
router.get('/qnr2', ctrlPublic.qnr2);
router.get('/qnr3', ctrlPublic.qnr3);
router.get('/qnr-end', ctrlPublic.qnr_end);
router.get('/program-list', ctrlPublic.program_list);

/* User-specific pages. */
router.get('/dashboard', ctrlUser.dashboard);
router.get('/dashboard/account', ctrlUser.account);
router.get('/dashboard/calendar', ctrlUser.calendar);

/* Exercises pages. */
router.get('/exercise-list', ctrlExercises.exercises);

router
    .route('/exercise-list/add')
    .get(ctrlExercises.addExercise)
    .post(ctrlExercises.doAddExercise);

router.get('/exercise/:exerciseid', ctrlExercises.exerciseInfo);


router
    .route('/register-form')
    .get(ctrlAuth.registerForm)
    .post(ctrlAuth.doRegisterUser);


module.exports = router;