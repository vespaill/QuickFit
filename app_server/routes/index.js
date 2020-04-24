const express       = require('express');
const router        = express.Router();

const ctrlPublic    = require('../controllers/public');
const ctrlExercises = require('../controllers/exercises');
const ctrlUsers      = require('../controllers/users');


/* ------------------------------ Public pages ------------------------------ */
router.get('/', ctrlPublic.intro);
router.get('/qnr1', ctrlPublic.qnr1);
router.get('/qnr2', ctrlPublic.qnr2);
router.get('/qnr3', ctrlPublic.qnr3);
router.get('/qnr-end', ctrlPublic.qnr_end);
router.get('/program-list', ctrlPublic.program_list);


/* ----------------------------- Exercise pages ----------------------------- */
router.get('/exercise-list', ctrlExercises.exercises);

router.route('/exercise-list/add')
    .get(ctrlExercises.addExerciseForm)
    .post(ctrlExercises.doAddExercise);

router.get('/exercise/:exerciseid', ctrlExercises.exerciseInfo);


/* ---------------- User authentication/authorization pages. ---------------- */
router.route('/register-form')
    .get(ctrlUsers.registerForm)
    .post(ctrlUsers.doRegisterUser);

router.route('/login-form')
    .get(ctrlUsers.loginForm)

/* ------------------------- Protected user pages. -------------------------- */
router.get('/dashboard', ctrlUsers.dashboard);
router.get('/dashboard/account', ctrlUsers.account);
router.get('/dashboard/calendar', ctrlUsers.calendar);

module.exports = router;

