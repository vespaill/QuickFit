const request = require('request');
const debug   = require('debug')('app-svr:ctrl/users ----->');

const server  = (require('../../globals').getServer)();
const showErr = require('../../globals').showError;
const _       = require('lodash');

const dashboard = (req, res) => {
    res.render('dashboard.pug', {
        title: '—Dashboard',
        username: req.session.user.name
    });
};

const account = (req, res) => {
    res.render('account.pug', {
        title: '—Account'
    });
};

const calendar = (req, res) => {
    let requestOptions = {
        url: `${server}${'/api/exercises'}`,
        method: 'GET',
        json: {},
    };

    /* Do exercise API call */
    request(requestOptions, (err, response, exercises) => {
        requestOptions.url = `${server}${'/api/programs'}`;

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
        title: '—Calendar',
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

/* -----------------------------------------------------------------------------
                          User login and registration
----------------------------------------------------------------------------- */
/* GET the register-form page */
const renderRegisterForm = (req, res) => {
    res.render('register-form', {
        title: '—Registration',
        error: req.query.err
    });
};

/* POST request to Users API */
const registerUser = (req, res) => {
    const funcName = 'registerUser()';
    debug(funcName, 'begin');
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
            url: `${server}${path}`,
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
                        showErr(req, res, statusCode);
                    }

                }
            );
        }
    }
    debug(funcName, 'end');
};

/* GET the login-form page */
const loginForm = (req, res) => {
    res.render('login-form', {
        title: '—Login',
        msg: req.query.msg
    });
};

const doLoginUser = (req, res) => {
    if (!req.body.email || !req.body.password)
        res.redirect('/login-form?msg=postdata_incomplete');

    const path = '/api/logins';
    const postdata = {
        email: req.body.email,
        password: req.body.password
    };
    const requestOptions = {
        url: `${server}${path}`,
        method: 'POST',
        json: postdata
    };

    request(requestOptions, (err, { statusCode }, response) => {
        if (statusCode === 200) {
            debug('doLoginUser(): response.user =', response.user.email);
            req.session.user = response.user;
            res.redirect('/dashboard');
        } else if (statusCode === 401) {
            res.redirect('/login-form?msg=incorrect_password');
        } else if (response.message == 'User not found') {
            res.redirect('/login-form?msg=unregistered_email');
        } else {
            showErr(req, res, statusCode);
        }
    });
}

const logoutUser = (req, res) => {
    req.session.destroy();
    debug('logoutUser(): Session detroyed, User logged out.')
    res
        .redirect('/login-form?msg=logged_out');
};

const renderUserExercises = (req, res, exerciseArray) => {
    let message = null;
    if ( !(exerciseArray instanceof Array) ) {
        message = 'API lookup error';
        exerciseArray = [];
    } else if (!exerciseArray.length) {
        message = 'User has no excises';
    }
    res.render('exercise-list', {
        title: '—User Exercises',
        exercises: _.orderBy(exerciseArray, ['group'],['asc']),/*  Sort by group */
        message,
        username: req.session.user.name,
        inserted: req.query.inserted
    });
};

const getUserExercises = (req, res) => {
    debug('getUserExercises(): req.session.user._id =', req.session.user._id);
    const requestOptions = {
        url: `${server}/api/users/${req.session.user._id}`,
        method: 'GET',
        json: {},
    };
    debug('getUserExercises(): url =', requestOptions.url);

    request(requestOptions, (err, response, { exercises }) => {
            renderUserExercises(req, res, exercises);
        }
    );
}

const renderExerciseForm = (req, res) => {
    debug('renderExerciseForm()...');
    res.render('exercise-form', {
        title: '—New Exercise',
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
};

const postExercise = (req, res) => {
    debug('postExercise(): req.session.user._id: ', req.session.user._id);
    const path = `/api/users/${req.session.user._id}/exercises`;
    const postdata = {
        name: req.body.name,
        equip: req.body.equipment,
        group: req.body.category,
        desc: req.body.description === ''? undefined : req.body.description
    };
    const requestOptions = {
        url: `${server}${path}`,
        method: 'POST',
        json: postdata
    };
    debug('postExercise(): postdata =', requestOptions);

    if (!postdata.name || !postdata.equip || !postdata.group) {
        res.redirect('/dashboard/exercise-list/add?err=val');
    } else {
        request(
            requestOptions,
            (err, {statusCode}, {name}) => {
                if (statusCode === 200) {
                    res.redirect('/dashboard/exercise-list?inserted=true');

                /* Adds a check to see whether the status is 400, the body has a
                name, and that name is ValidationError. */
                } else if (statusCode===400 && name && name==='ValidationError') {
                    /* If true, redirects to the exercise form, passing an error
                    flag in a query string */
                    res.redirect('/dashboard/exercise-list/add?err=val');

                } else {
                    showErr(req, res, statusCode);
                }
            }
        );
    }
};

const renderInfoOneUserExercise = (req, res, exercise) => {
    debug('renderInfoOneUserExercise(): exercise = %O', exercise.name);
    res.render('exercise-info.pug', {
        title: exercise.name,
        exercise
    });
}


const getOneUserExercise = (req, res) => {
    const requestOptions = {
        url: `${server}/api/users/${req.session.user._id}/exercises/${req.params.exerciseid}`,
        method: 'GET',
        json: {},
    };
    debug('getOneUserExercise(): ', requestOptions.url);
    request(requestOptions, (err, response, exercise) => {
        debug('getOneUserExercise(): exercise = %O', exercise.name);
        renderInfoOneUserExercise(req, res, exercise);
    });
};

module.exports = {
    dashboard,
    account,
    calendar,

    renderRegisterForm,
    registerUser,

    loginForm,
    doLoginUser,

    logoutUser,

    getUserExercises,
    getOneUserExercise,

    renderExerciseForm,
    postExercise,
};