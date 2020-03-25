const express = require('express');
const router = express.Router();
const ctrlPublic = require('../controllers/public');
const ctrlUser = require('../controllers/user_specific_pages');

/* GET the different pages: intro, login, register and questionnaire */
router.get('/', ctrlPublic.intro);
router.get('/login', ctrlPublic.login);
router.get('/register', ctrlPublic.register);
router.get('/questionnaire', ctrlPublic.questionnaire);
router.get('/about', ctrlPublic.about);

module.exports = router;