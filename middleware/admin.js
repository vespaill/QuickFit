module.exports = function (req, res, next) {
    /* 401 unauthorized */
    /* 403 forbidden */

    if (!req.user.isAdmin){
        return res
            .status(403)
            .send('Access denied');
    }

    /* If isAdmin, pass control to next middleware function. */
    next();
}