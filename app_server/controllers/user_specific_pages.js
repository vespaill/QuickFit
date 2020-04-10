const globals = require('./globals');
const request = require('request');

const dashboard = (req, res) => {
    res.render('dashboard.pug', {
        title: globals.getSiteName(),
        greetingMsg: 'Hello [Name]'
    });
};

const account = (req, res) => {
    res.render('account.pug', {
        title: globals.getSiteName()
    });
};

const calendar = (req, res) => {
    /* Set the path for the API request. */
    const path = '/api/exercises';

    // Set the request options, including URL, method and empty JSON body
    const requestOptions = {

        /* Full URL of the request to be made, including protocol, domain, path,
           and URL parameters */
        url: `${globals.getServer()}${path}`,

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
            renderCalendar(req, res, body);
        }
    );
};

const renderCalendar = (req, res, exercises) => {
    let message = null;

    if (!(exercises instanceof Array)) {
        message = "API lookup error";
        responseBody = [];
    } else {
        if (!exercises.length) {
            message = "No exercises found in database";
        }
    }

    res.render('calendar.pug', {
        title: `${globals.getSiteName()}—Calendar`,
        message: message,
        exercises: exercises,
        // Dummy workout program data for now (assumes that the user can only have 1 program)
        program: [
            {
                name: "Flat Bench Press",
                group: "Chest",
                dayOfWeek: 1,
                reps: 10,
                id: "id"
            },
            {
                name: "Arnorld Press",
                group: "Shoulders",
                dayOfWeek: 1,
                reps: 10,
                id: "id"
            },
            {
                name: "Plank",
                group: "Core",
                dayOfWeek: 3,
                reps: 10,
                id: "id"
            }
        ]
    });
};

module.exports = {
    dashboard,
    account,
    calendar
};