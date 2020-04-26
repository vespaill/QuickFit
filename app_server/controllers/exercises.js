const globals = require('../../globals');
const request = require('request');
const debug   = require('debug')('app-svr:ctrl/exercises ->');

const renderExercises = (req, res, exerciseArray) => {
    debug('renderExercises()');
    debug('Authenticated: ', res.locals.authenticated);
    let message = null;

    /* If the response isn't an array, set a message and set the responseBody
       to be an empty array. */
    if ( !(exerciseArray instanceof Array) ) {
        message = "API lookup error";
        debug(exerciseArray);
        exerciseArray = [];
    } else {
        /* If the response is an array with no length, set a message. */
        if (!exerciseArray.length) {
            message = "No exercises found in database";
        }
    }

    /* render is the Express function for compiling a view template to send as
       the HTML response that the browser will receive.
       The render method takes the name of the view template and a JavaScript
       data object. */
    res.render(
        /* Name of template to use, in this case referencing exercises.pug */
        'exercise-list', {

        /* JavaScript object containing data for template to use */
        title: '—Exercises',

        /* Here we have finally removed the hardcoded array of exercise objects,
           and passed the responseBody instead. */
        exercises: exerciseArray,
        message,
        inserted: req.query.inserted
    });
};

const getPublicExercises = (req, res) => {
    debug('exercises()');
    debug('Authenticated: ', res.locals.authenticated);

    const requestOptions = {
        url: `${globals.getServer()}/api/exercises`,
        method: 'GET',
        json: {},
    };

    request(requestOptions, (err, response, body) => {
            renderExercises(req, res, body);
        }
    );

};

const renderExerciseInfo = function (req, res, exercise) {
    debug('exercise = %O', exercise.name);
    /* Compile the view template exercise-info.pug */
    res.render('exercise-info.pug', {
        /* Pass some data to the template. */
        title: exercise.name,
        exercise
    });
};

const exerciseInfo = (req, res) => {

    /* Set the path for the API request. Server is already set up at the top. */
    const path = `/api/exercises/${req.params.exerciseid}`;
    const requestOptions = {
        url: `${globals.getServer()}${path}`,
        method: 'GET',
        json: {}
    };

    /* Make request to the API, sending through the request options. */
    request(
        requestOptions,
        (err, response, body) => {
            renderExerciseInfo(req, res, body);
        }
    );

};

module.exports = {
    getPublicExercises,
    exerciseInfo,
};