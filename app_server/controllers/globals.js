const getSiteName = () => 'QuickFit';

const getServer = () => {
        // If the application is running in production mode, use the live URL.
        if (process.env.NODE_ENV === 'production')
            return 'https://quickfit.herokuapp.com'

        // Otherwise use the default server URL for the local development.
        return 'http://localhost:3000';
};

module.exports = {
    getSiteName,
    getServer
};