const mongoose   = require('mongoose');
const debug      = require('debug')('app-api:ctrl/logins ---->');
const _          = require('lodash');
const User_model = mongoose.model('User');
const setToken   = require('../../globals').setInMemToken;

/* POST */
const loginUser = (req, res) => {
    /* Validate that the required fields have been supplied. */
    if (!req.body.email || !req.body.password) {
        debug('Undefined email or password\nSending 400')
        return res
            .status(400)
            .send('All fields required');
    }
    User_model
        .findOne({ email: req.body.email })
        .exec((err, user) => {
            if (!user) {
                return res
                    .status(404)
                    .json({ message: 'User not found' });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            }

            if ( !user.validPassword(req.body.password) ) {
                return res
                    .status(401)
                    .send({ message: 'Incorrect password' });
            };

            const token = user.generateJwt();
            setToken(token);
            return res
                .header('x-auth-token', token)
                .status(200)
                .json(_.assign({
                    message: 'Login successful. JWT stored in header \'x-auth-token\''
                }, _.pick(user, 'email')));
        });

};

module.exports = {
    loginUser
};