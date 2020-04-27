const mongoose       = require('mongoose');
const debug          = require('debug')('app-api:ctrl/users ----->');
const _              = require('lodash');
const Exercise_model = mongoose.model('Exercise');
const User_model     = mongoose.model('User');

/* GET */
const getUsers = (req, res) => {
    User_model
        .find()
        .sort('-isAdmin email')
        .select('email isAdmin')
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

    debug('Populating user exercises...');
    user.populateExercises();

    debug('Saving new user to MongoDB...');
    user.save((err) => {
        const retObj = _.assign( { message: '' }, _.pick(user, 'email') );
        if (err) {
            if (err.code === 11000) { /* Mongo error: duplicate key */
                debug('MongoError: E11000 duplicate key error collection');
                debug('Sending 409');
                retObj.message = 'Email already registered.';
                res
                    .status(409)
                    .json(retObj);
            } else { /* generic error */
                debug('Generic error\nSending 404');
                res
                    .status(404)
                    .json(err);
            }
        } else {
            debug('Successful save of new user\nSending 200');
            retObj.message = 'New email has been registered';
            res
                .status(200)
                .json(retObj);
        }
    });
};


/* GET /:id */
const getUser = (req, res) => {
    User_model
        .findById(req.params.userid)
        // .select('isAdmin email')
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
            .select('email')
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
                    .json({
                        message: 'User deleted',
                        email: user.email
                    });
            });
    } else {
        res
            .status(404)
            .send('Invalid exercise ID');
    }
}

/* POST /:id/exercises */
const addExerciseToUser = (req, res) => {
    const { userid } = req.params;
    const exercise = req.body;

    if (!userid) {
        return res
            .status(404)
            .send('Undefined user ID');
    }

    User_model
        .findById(userid)
        .exec((err, user) => {
            if ( !user ) {
                return res
                    .status(404)
                    .send('User not found');
            } else if (err) {
                return res
                    .status(400)
                    .json(err);
            }
            user.exercises.push( new Exercise_model(exercise) );

            user.save((err, updatedUser) => {
                if (err)
                    res
                        .status(404)
                        .send(err.message);
                else {
                    res
                        .status(200)
                        .json(updatedUser);
                }
            });
        });
}

/* GET /:userid/exercises/:exerciseid */
const getOneUserExercise = (req, res) => {
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

            debug('getOneUserExercise(): exerciseid =', req.params.exerciseid);
            const exercise = user.exercises.find((element) => {
                return element._id == req.params.exerciseid
            });
            debug('getOneUserExercise(): exercise: ', exercise);

            return res
                .status(200)
                .json(exercise);
        });
}

module.exports = {
    getUsers,
    registerUser,
    getUser,
    // updateUser,
    deleteUser,
    addExerciseToUser,
    getOneUserExercise
};