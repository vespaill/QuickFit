const globals = require('../../globals');
const request = require('request');
const debug   = require('debug')('app-svr:ctrl/users    ');

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

    /* Do exercise API call */
    request(requestOptions, (err, response, exercises) => {
        requestOptions.url = `${globals.getServer()}${'/api/programs'}`;

        /* Do program API call */
        request(requestOptions, (err, response, programs) => {
            /* For now, there is one program for the entire website
               Later, there will be at least one per user */
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
        /* Dummy workout program data for now (assumes that the user can only
           have 1 program) */
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
};

/* GET the register-form page */
const registerForm = (req, res) => {
    res.render('register-form', {
        title: `${globals.getSiteName()}—Registration`,
        error: req.query.err
    });
};

/* POST request to Users API */
const doRegisterUser = (req, res) => {
    /* If the password fields don't match, redirect. */
    if (req.body.password !== req.body.pwConfirm) {
        debug('Password fields do not match!');
        res.redirect('/register-form?err=password_confirm_err');

    } else {
        debug('Password fields match.\nGenerating request.');
        const path = '/api/users/';
        const postdata = {
            name: `${req.body.firstName} ${req.body.lastName}`,
            email: req.body.email,
            password: req.body.password
        };
        const requestOptions = {
            url: `${globals.getServer()}${path}`,
            method: 'POST',
            json: postdata
        };

        debug('requestOptions: %O', requestOptions);

        /* If any of the postdata is incomplete, redirect */
        if (!postdata.name || !postdata.email || !postdata.password) {
            res.redirect('/register-form?err=postdata_incomplete');
        } else {
            request(requestOptions,

                /*     req.statusCode     res.name     */
                (err,  { statusCode },    { name }) => {

                    /* On successful registration, redirect to login page. */
                    if (statusCode === 200) {
                        debug('200 received\nSuccessful register\nRedirecting to login');
                        res.redirect('/login-form?msg=register_success');

                    /* Adds a check to see whether the status is 400, the body
                       has a name, and that name is ValidationError. */
                    } else if (statusCode === 400 && name && name === 'ValidationError') {
                        debug('400 received');
                        /* If true, redirect to the register form, passing an
                           error flag in a query string */
                        res.redirect('/register-form?err=validation_error');

                    } else if (statusCode === 409) {
                        debug('409 received\nRegistration failed; email already taken');
                        res.redirect('/register-form?err=email_taken');

                    } else {
                        globals.showError(req, res, statusCode);
                    }

                }
            );
        }
    }
};

/* GET the login-form page */
const loginForm = (req, res) => {
    res.render('login-form', {
        title: `${globals.getSiteName()}—Login`,
        msg: req.query.msg
    });
};

module.exports = {
    dashboard,
    account,
    calendar,
    registerForm,
    doRegisterUser,
    loginForm,
};