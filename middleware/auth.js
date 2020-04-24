const jwt = require('jsonwebtoken');
const getToken   = require('../globals').getInMemToken;

module.exports = function auth(req, res, next) {
    // const token = req.header('x-auth-token');
    const token = getToken();
    if (!token) {
        return res
            .status(401)
            .send('Access denied. No token provided.');
    }

    try {
        /* If the token is valid, return the payload data as an object */
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (ex) {
        res
            .status(400)
            .send('Invalid token.');
    }
}
