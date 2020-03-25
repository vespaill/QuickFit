const express = require('express');
const router = express.Router();
const ctrlPublic = require('../controllers/public');
const ctrlUser = require('../controllers/user_specific_pages');

/* Define URL for different pages. */
router.get('/', ctrlPublic.intro);
router.get('/login', ctrlPublic.login);
router.get('/register', ctrlPublic.register);
router.get('/questionnaire', ctrlPublic.questionnaire);
router.get('/about', ctrlPublic.about);

/* User-specific pages. */
router.get('/dashboard', ctrlUser.dashboard);
router.get('/dashboard/settings', ctrlUser.settings);
router.get('/dashboard/calendar', ctrlUser.calendar);

module.exports = router;