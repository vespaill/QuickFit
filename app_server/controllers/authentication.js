const globals = require('./globals');
const request = require('request');
const debug   = require('debug')('app-svr:auth');

// GET 'Registration' page
const registerForm = (req, res) => {
    res.render('register-form', {
        title: `${globals.getSiteName()}—Registration`,
        error: req.query.err
    });
};

const doRegisterUser = (req, res) => {
    debug(`password : ${req.body.password}`);
    debug(`pwConfirm: ${req.body.pwConfirm}`);

    // If password fields don't match, redirect.
    if (req.body.password !== req.body.pwConfirm) {
        res.redirect('/register-form?err=password_confirm_err');

    } else {
        const path = '/api/register';
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

        debug(`postdata: ${JSON.stringify(postdata,  null, '\t')}`);
        debug(`requestOptions: ${JSON.stringify(requestOptions,  null, '\t')}`);

        // If any of the postdata is incomplete, redirect
        if (!postdata.name || !postdata.email || !postdata.password) {
            res.redirect('/register-form?err=postdata_incomplete');
        } else {
            request(
                requestOptions,
                (err, {statusCode}, {name}) => {
                    // On successful registration, redirect to login page.
                    if (statusCode === 200) {
                        res.redirect('/login-form?msg=register_success');
                    /* Adds a check to see whether the status is 400, the body has a
                    name, and that name is ValidationError. */
                    } else if (statusCode===400 && name && name==='ValidationError') {
                        /* If true, redirect to the register form, passing an error
                        flag in a query string */
                        res.redirect('/register-form?err=validation_error');
                    } else if (statusCode == 409) {
                        res.redirect('/register-form?err=email_taken');
                    } else {
                        globals.showError(req, res, statusCode);
                    }
                }
            );
        }
    }
};

/* Get the login page */
const loginForm = (req, res) => {
    res.render('login-form', {
        title: `${globals.getSiteName()}—Login`,
        msg: req.query.msg
    });
};

const doUserLogin = (req, res) => {
    // res.header('x-auth-token', token)
        // .send
}

module.exports = {
    registerForm,
    doRegisterUser,
    loginForm
};