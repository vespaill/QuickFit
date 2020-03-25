const website_name = 'QuickFit';

/* Get the intro page */
const intro = (req, res) => {
    /* Defines the route, using the view template 'index.pug' but changing the
       with title 'Introduction' */
    res.render('intro', {
        title: website_name,
        introMsg: 'QuickFit is a progressive web application designed to help people meet their fitness goals, whatever they may be. QuickFit has been created from the ground-up with beginners in mind. It aims to remove needless complexities that are often experienced by the beginner when choosing a workout program. Click below to find a workout program tailored to your needs by going through our questionnaire.'
    });

};

/* Get the questionnaire page */
const questionnaire = (req, res) => {
    res.render('questionnaire', {
        title: `${website_name}—questionnaire`
    });
};

/* Get the login page */
const login = (req, res) => {
    res.render('login', {
        title: `${website_name}—Login`
    });
};

/* Get the registration page */
const register = (req, res) => {
    res.render('register', {
        title: `${website_name}—Registration`
    });
};

/* Get the about page */
const about = (req, res) => {
    res.render('about', {
        title: `${website_name}—About`
    });
};

module.exports = {
    intro,
    login,
    register,
    questionnaire,
    about
};