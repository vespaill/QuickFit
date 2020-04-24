const mongoose   = require('mongoose');
const debug      = require('debug')('app-api:ctrl/users    ');
const User_model = mongoose.model('User');

/* GET */
const getUsers = (req, res) => {
    User_model
        .find()
        .sort('email')
        .select('email')
        .exec((err, users) => {
            if (!users) {
                return res
                    .status(404)
                    .send('No users found');
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            return res
                .status(200)
                .json(users);
        });
}


/* POST */
const registerUser = (req, res) => {
    debug('req.body: %O', req.body);

    if (!req.body.name || !req.body.email || !req.body.password) {
        debug('Undefined name, email or password\nSending 400');
        return res
            .status(400)
            .send('All fields required');
    }

    debug('Creating new user instance...');
    const user = new User_model();
    user.name = req.body.name;
    user.email = req.body.email;

    debug('Hashing password...');
    user.setPassword(req.body.password);

    debug('Saving new user to MongoDB...');
    user.save((err) => {
        if (err) {
            if (err.code === 11000) { /* Mongo error: duplicate key */
                debug('MongoError: E11000 duplicate key error collection\nSending 409');
                res
                    .status(409)
                    .send('Email has already been registered once.');
            } else { /* generic error */
                debug('Generic error\nSending 404');
                res
                    .status(404)
                    .json(err);
            }
        } else {
            debug('Successful save of new user\nSending 200');
            res
                .status(200)
                .send("Successfully registered new user");
        }
    });

};


/* GET /:id */
const getUser = (req, res) => {
    User_model
        .findById(req.params.userid)
        .exec((err, user) => {
            if (!user) {
                return res
                    .status(404)
                    .send('User not found');

            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            return res
                .status(200)
                .json(user);
        });
}

/* PUT /:id */
// const updateUser = (req, res) => {
    // const { userid } = req.params;
    // if (!userid) return res.status(404).send('Undefined exercise ID');
    // Exercise_model
    //     .findById(userid)
    //     .exec((err, user) => {
    //         if ( !user )  return res.status(404).send('Exercise not found');
    //         else if (err) return res.status(400).json(err);

    //         debug('req.body = %O', req.body);
    //         for (var p in req.body) user[p] = req.body[p];
    //         debug('exercise = %O', user);

    //         user.save((err, updatedUser) => {
    //             if (err) res.status(404).send(err.message);
    //             else     res.status(200).json(updatedUser);
    //         });
    //     });
// }


/* DELETE /:id */
const deleteUser = (req, res) => {
    const { userid } = req.params;

    if (userid) {
        User_model
            .findByIdAndRemove(userid)
            .exec((err, user) => {
                if (err) {
                    return res
                        .status(404)
                        .send(err.message);
                } else if (!user) {
                    return res
                        .status(404)
                        .send('User not found');
                }
                res
                    .status(200)
                    .json(user);
            });
    } else {
        res
            .status(404)
            .send('Invalid exercise ID');
    }
}


const loginUser = (req, res) => {

    // /* Validate that the required fields have been supplied. */
    // if (!req.body.email || !req.body.password) {
    //     debug('Undefined email or password\nSending 400')
    //     return res
    //         .status(400)
    //         .send('All fields required');
    // }

    // /* Pass the name of the strategy and a callback to the authenticate method. */
    // passport.authenticate('local', (err, user, info) => {
    //     /* Return an error if Passport returns an error. */
    //     if (err) {
    //         debug('Generic error\nSending 404')
    //         return res
    //             .status(404)
    //             .json(err);
    //     }
    //     /* If Passport returned a user instance, generate and send a JWT. */
    //     if (user) {
    //         debug('User authenticated');
    //         debug(user);
    //         debug('Sending 200 & user');
    //         res
    //             .status(200)
    //             .json({ user });
    //     /* Otherwise, return an info message (why authentication failed). */
    //     } else {
    //         debug('Authentication failed\nSending 401 & info')
    //         res
    //             .status(401)
    //             .json(info);
    //     }

    // }) (req, res);  /* Make sure that req and res are available to Passport. */

};

module.exports = {
    getUsers,
    registerUser,
    getUser,
    // updateUser,
    deleteUser
};