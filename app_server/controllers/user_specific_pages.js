const myGlobals = require('./globals');

const dashboard = (req, res) => {
    res.render('dashboard.pug', {
        title: myGlobals.website_name(),
        greetingMsg: 'Hello [Name]'
    });
};

const account = (req, res) => {
    res.render('account.pug', {
        title: myGlobals.website_name()
    });
};

const calendar = (req, res) => {
    res.render('calendar.pug', {
        title: myGlobals.website_name(),
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