const globals = require('./globals');
const request = require('request');

// GET 'Registration' page
const registerForm = (req, res) => {
    res.render('register-form', {
        title: `${globals.getSiteName()}—Registration`,
        error: req.query.err
    });
};

const doRegisterUser = (req, res) => {

    if (req.body.password !== req.body.pwConfirm) {
        res.redirect('/register-form?err=password_confirm_err');
    }

    const path = '/api/register';

    const postdata = {
        name: `${req.body.firstName} ${req.body.lastName}`,
        email: req.body.email,
        password: req.body.password
    };

    console.log(`postdata: ${JSON.stringify(postdata,  null, '\t')}`);

    const requestOptions = {
        url: `${globals.getServer()}${path}`,
        method: 'POST',
        json: postdata
    };

    console.log(`requestOptions: ${JSON.stringify(requestOptions,  null, '\t')}`);

    if (!postdata.name || !postdata.email || !postdata.password) {
        res.redirect('/register-form?err=postdata_incomplete');
    } else {
        request(
            requestOptions,
            (err, {statusCode}, {name}) => {
                // On successful registration, redirect to login page.
                if (statusCode === 200) {
                    res.redirect('/login-form');

                /* Adds a check to see whether the status is 400, the body has a
                   name, and that name is ValidationError. */
                } else if (statusCode===400 && name && name==='ValidationError') {
                    /* If true, redirect to the register form, passing an error
                       flag in a query string */
                    res.redirect('/register-form?err=validation_error');

                } else {
                    globals.showError(req, res, statusCode);
                }
            }
        );
    }

};

/* Get the login page */
const loginForm = (req, res) => {
    res.render('login-form', {
        title: `${globals.getSiteName()}—Login`
    });
};

module.exports = {
    registerForm,
    doRegisterUser,
    loginForm
};