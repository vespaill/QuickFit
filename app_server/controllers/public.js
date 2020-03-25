/* Get the intro page */
const intro = (req, res) => {
    /* Defines the route, using the view template 'index.pug' but changing the
       with title 'Introduction' */
    res.render('intro', { title: 'Introduction' })
};

/* Get the login page */
const login = (req, res) => {
    res.render('login', { title: 'Login' })
};

/* Get the registration page */
const register = (req, res) => {
    res.render('register', { title: 'Registration' })
};

/* Get the questionnaire page */
const questionnaire = (req, res) => {
    res.render('questionnaire', { title: 'Questionnaire' })
};

module.exports = {
    intro,
    login,
    register,
    questionnaire
};