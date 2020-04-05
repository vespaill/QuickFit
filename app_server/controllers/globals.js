const getSiteName = () => 'QuickFit';

const getServer = () => {
    // If the application is running in production mode, use the live URL.
    if (process.env.NODE_ENV === 'production')
        return 'https://quickfit.herokuapp.com'

    // Otherwise use the default server URL for the local development.
    return 'http://localhost:3000';
};

const showError = (req, res, status) => {
    let title = '';
    let content = '';
    if (status === 404) {
        title = '404, page not found';
        content = 'Oh dear. Looks like you can\'t find this page. Sorry.';
        console.log(res.body);

    } else {
        title = `${status}, something's gone wrong`;
        content = 'Something, somewhere, has gone just a little bit wrong.';
    }
    res.status(status);
    res.render('generic-text', {
        title,
        content
    });
};

module.exports = {
    getSiteName,
    getServer,
    showError
};