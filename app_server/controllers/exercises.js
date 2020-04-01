const myGlobals = require('./globals');
const request = require('request');

// Set the default server URL for the local development.
const apiOptions = { server: 'http://localhost:3000' };

// If the application is running in production mode, use the live URL.
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://quickfit.herokuapp.com';
}

const renderExercises = (req, res, responseBody) => {

    let message = null;

    /* If the response isn't an array, set a message and set the responseBody
       to be an empty array. */
    if (!(responseBody instanceof Array)) {
        message = "API lookup error";
        responseBody = [];
    } else {
        // If the response is an array with no length, set a message.
        if (!responseBody.length) {
            message = "No exercises found in database";
        }
    }

    /* render is the Express function for compiling a view template to send as
       the HTML response that the browser will receive.
       The render method takes the name of the view template and a JavaScript
       data object. */
    res.render(

        // Name of template to use, in this case referencing exercises.pug
        'exercises', {  // JavaScript object containing data for template to use

        title: `${myGlobals.website_name()}—exercises`,

        /* Here we have finally removed the hardcoded array of exercise objects,
           and passed the responseBody instead. */
        exercises: responseBody,
        message

    });

};

const exercises = (req, res) => {

    /* Set the path for the API request. (The server is already set at the top
       of the file.) */
    const path = '/api/exercises';

    // Set the request options, including URL, method and empty JSON body
    const requestOptions = {

        /* Full URL of the request to be made, including protocol, domain, path,
           and URL parameters */
        url: `${apiOptions.server}${path}`,

        // Method of the request, such as GET, POST, PUT, or DELETE
        method: 'GET',

        /* Body of the request as a JavaScript object; an empty object should be
           sent if no body data is needed */
        json: {},
    };

    // Make request to the API, sending through the request options.
    request(
        requestOptions,

        // Supply the callback to render the exercises page
        (err, response, body) => {
            // Pass the body returned by the request to renderExercises()
            renderExercises(req, res, body);
        }
    );

};

const renderExerciseInfo = function (req, res, exercise) {
    // Compile the view template exercise-info.pug
    res.render('exercise-info.pug', {
        // Pass some data to the template.
        title: exercise.name,
        exercise
    });
};

const exerciseInfo = (req, res) => {

    // Set the path for the API request. Server is already set up at the top.
    const path = `/api/exercise/${req.params.exerciseid}`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };

    // Make request to the API, sending through the request options.
    request(
        requestOptions,
        (err, response, body) => {
            renderExerciseInfo(req, res, body);
        }
    );

};

// GET 'Add Exercise' page
const addExercise = (req, res) => {
    res.render('exercise-form.pug', {
        title: 'New Exercise',
        groupOptions: [
            'Chest',
            'Upper back',
            'Shoulders',
            'Biceps',
            'Triceps',
            'Core',
            'Lower body'
        ],
        equipOptions: [{
                abbrv: 'BB',
                name: 'Barbell'
            }, {
                abbrv: 'DB',
                name: 'Dumbbell'
            }, {
                abbrv: 'C',
                name: 'Cable'
            }, {
                abbrv: 'M',
                name: 'Machine'
            }, {
                abbrv: 'BE',
                name: 'Body weight<br>& additional equipment'
            }, {
                abbrv: 'BW',
                name: 'Body weight only'
        }],
        /* Send a new error variable to the view, passing the view any existing
           query parameters. */
        error: req.query.err
    });
}

const doAddExercise = (req, res) => {

    const path = '/api/exercises';

    const postdata = {
        name: req.body.name,
        equip: req.body.equipment,
        group: req.body.category,
        desc: req.body.description === ''? undefined : req.body.description
    };

    console.log(postdata);

    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'POST',
        json: postdata
    };

    request(
        requestOptions,
        (err, {statusCode}, {name}) => {
            if (statusCode === 201) {
                res.redirect('/exercises');

            /* Adds a check to see whether the status is 400, the body has a
               name, and that name is ValidationError. */
            } else if (statusCode===400 && name && name==='ValidationError') {
                /* If true, redirects to the exercise form, passing an error
                   flag in a query string */
                res.redirect('/exercises/add?err=val');

            } else {
                showError(req, res, statusCode);
            }
        }
    );

}

const showError = (req, res, status) => {
    let title = '';
    let content = '';
    if (status === 404) {
        title = '404, page not found';
        content = 'Oh dear. Looks like you can\'t find this page. Sorry.';
    } else {
        title = `${status}, something's gone wrong`;
        content = 'Something, somewhere, has gone just a little bit wrong.';
    }
    res.status(status);
    res.render('generic-text', {
        title,
        content
    });
};

module.exports = {
    exercises,
    exerciseInfo,
    addExercise,
    doAddExercise
};