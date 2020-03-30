const myGlobals = require('./globals');
const request = require('request');

// Set the default server URL for the local development.
const apiOptions = {server: 'http://localhost:3000'};

// If the application is running in production mode, use the live URL.
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://quickfit.herokuapp.com';
}

const renderExercises = (req, res, responseBody) => {

    let message = null;

    /* If the response isn't an array, set a message and set the responseBody
       to be an empty array. */
    if ( !(responseBody instanceof Array) ) {
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
    res.render('exercise-info', {
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

module.exports = {
    exercises,
    exerciseInfo
};