const website_name = 'QuickFit';

const dashboard = (req, res) => {
    res.render('dashboard.pug', {
        title: website_name
    });
};

const account = (req, res) => {
    res.render('account.pug', {
        title: website_name
    });
};

const calendar = (req, res) => {
    res.render('calendar.pug', {
        title: website_name
    });
};

module.exports = {
    dashboard,
    account,
    calendar
};