const express = require('express');
const router = express.Router();
const ctrlPublic = require('../controllers/public');
const ctrlUser = require('../controllers/user_specific_pages');
const ctrlExercises = require('../controllers/exercises');

/* Define URL for different pages. */
router.get('/', ctrlPublic.intro);
router.get('/login', ctrlPublic.login);
router.get('/register', ctrlPublic.register);
router.get('/qnr1', ctrlPublic.qnr1);
router.get('/qnr2', ctrlPublic.qnr2);
router.get('/qnr3', ctrlPublic.qnr3);
router.get('/qnr_end', ctrlPublic.qnr_end);
router.get('/program_list', ctrlPublic.program_list);
router.get('/about', ctrlPublic.about);

/* User-specific pages. */
router.get('/dashboard', ctrlUser.dashboard);
router.get('/dashboard/account', ctrlUser.account);
router.get('/dashboard/calendar', ctrlUser.calendar);

/* Exercises pages. */
router.get('/exercises', ctrlExercises.exercises);
router.get('/exercise/:exerciseid', ctrlExercises.exerciseInfo);


module.exports = router;