const myGlobals = require('./globals');

const dashboard = (req, res) => {
    res.render('dashboard.pug', {
        title: myGlobals.website_name(),
        greetingMsg: 'Hello [Name]'
    });
};

const account = (req, res) => {
    res.render('account.pug', {
        title: myGlobals.website_name()
    });
};

const calendar = (req, res) => {
    res.render('calendar.pug', {
        title: myGlobals.website_name()
    });
};

module.exports = {
    dashboard,
    account,
    calendar
};