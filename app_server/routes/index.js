const express = require('express');
const router = express.Router();

/* Requires the main controllers file */
const ctrlMain = require('../controllers/main');

const homepageController = (req, res) => {
    res.render('index', { title: 'Express' });
};

/* GET homepage.
   References the index method of the controllers in the route definition */
router.get('/', ctrlMain.index);

module.exports = router;
