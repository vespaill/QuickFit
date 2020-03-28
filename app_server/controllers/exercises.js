const myGlobals = require('./globals');
const request = require('request');

// Set the default server URL for the local development.
const apiOptions = {server: 'http://localhost:3000'};

// If the application is running in production mode, use the live URL.
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://quickfit.herokuapp.com';
}

const renderExercises = (req, res, responseBody) => {
    res.render('exercises', {
        title: `${myGlobals.website_name()}—exercises`,
        exercises: responseBody
    });
};

const exercises = (req, res) => {

    /* Sets the path for the API request. (The server is already set at the top
       of the file.) */
    const path = '/api/exercises';

    /* Sets the request options, including URL, method, empty JSON body, and
       hardcoded query string parameters. */
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };
    request(
        requestOptions,
        (err, response, body) => {
            // Pass the body returned by the request to the renderExercises
            renderExercises(req, res, body);
        }
    );

};

module.exports = {
    exercises
};