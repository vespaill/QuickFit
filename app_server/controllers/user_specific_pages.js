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
    let requestOptions = {
        url: `${globals.getServer()}${'/api/exercises'}`,
        method: 'GET',
        json: {},
    };

    // Do exercise API call
    request(requestOptions, (err, response, exercises) => {
        requestOptions.url = `${globals.getServer()}${'/api/programs'}`;

        // Do program API call
        request(requestOptions, (err, response, programs) => {
            // For now, there is one program for the entire website
            // Later, there will be at least one per user
            renderCalendar(req, res, exercises, programs[0]);
        });
    });
};

const renderCalendar = (req, res, exercises, program) => {
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
        program: program
        // Dummy workout program data for now (assumes that the user can only have 1 program)
        // program: [
        //     {
        //         name: "Flat Bench Press",
        //         group: "Chest",
        //         dayOfWeek: 1,
        //         reps: 10,
        //         id: "id"
        //     },
        //     {
        //         name: "Arnorld Press",
        //         group: "Shoulders",
        //         dayOfWeek: 1,
        //         reps: 10,
        //         id: "id"
        //     },
        //     {
        //         name: "Plank",
        //         group: "Core",
        //         dayOfWeek: 3,
        //         reps: 10,
        //         id: "id"
        //     }
        // ]
    });
};

module.exports = {
    dashboard,
    account,
    calendar
};