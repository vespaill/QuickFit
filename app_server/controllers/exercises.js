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

        /* Here we have finally removed the hardcoded array of exercise objects,
           and passed the responseBody through instead. */
        exercises: responseBody
    });
};

const exercises = (req, res) => {

    /* Sets the path for the API request. (The server is already set at the top
       of the file.) */
    const path = '/api/exercises';

    // Sets the request options, including URL, method and empty JSON body
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

    // Make request, sending through the request options.
    request(
        requestOptions,

        // Supply the callback to render the exercises page
        (err, response, body) => {
            // Pass the body returned by the request to renderExercises()
            renderExercises(req, res, body);
        }
    );

};

module.exports = {
    exercises
};