const globals = require('./globals');

/* Get the intro page */
const intro = (req, res) => {
    /* Defines the route, using the view template 'intro.pug'
       Passes an object with variables to be used in the view. */
    res.render('intro.pug', {
        title: globals.getSiteName(),
        introMsg: 'QuickFit is a progressive web application designed to help people meet their fitness goals, whatever they may be. QuickFit has been created from the ground-up with beginners in mind. It aims to remove needless complexities that are often experienced by the beginner when choosing a workout program. Click below to find a workout program tailored to your needs by going through our questionnaire.'
    });

};

/* Get the questionnaire pages */
const qnr1 = (req, res) => {
    res.render('questionnaire.pug', {
        title: `${globals.getSiteName()}—Questionnaire`,
        savedAnswers: [],
        question: 'What is your fitness goal?',
        options: ['Gain Muscle', 'Maintain Weight', 'Burn Fat'],
        prev: '/',      // url for previous page
        next: 'qnr2'    // url for next page
    });
};
const qnr2 = (req, res) => {
    res.render('questionnaire.pug', {
        title: `${globals.getSiteName()}—Questionnaire`,
        savedAnswers: ['saved#1'],
        question: 'How many days a week will you train?',
        options: ['3', '4', '5', '6'],
        prev: 'qnr1',
        next: 'qnr3'
    });
};
const qnr3 = (req, res) => {
    res.render('questionnaire.pug', {
        title: `${globals.getSiteName()}—Questionnaire`,
        savedAnswers: ['saved#1', 'saved#2'],
        question: 'How much work will you put in per session?',
        options: ['9', '15', '21+'],
        prev: 'qnr2',
        next: 'qnr_end'
    });
};
const qnr_end = (req, res) => {
    res.render('qnr_end.pug', {
        title: `${globals.getSiteName()}—Questionnaire`,
        savedAnswers: ['saved#1', 'saved#2', 'saved#2'],
        recommended_program: '${Recommended Program}',
    });
};

const program_list = (req, res) => {
    res.render('program-list.pug', {
        title: `${globals.getSiteName()}—Programs`,
        programs: ['Gorilla Gains', 'Lipids Annihilator', 'Anabolic Beast',
                   'Catabolic ReactX', 'Look Like I\'m On Steroids',
                   'Belly Deflator', 'Lipocyte Chemotherapy', 'Rocky Montage',
                   'The Terminator']
    });
}

/* Get the login page */
const login = (req, res) => {
    res.render('login.pug', {
        title: `${globals.getSiteName()}—Login`
    });
};

/* Get the registration page */
const register = (req, res) => {
    res.render('register-form.pug', {
        title: `${globals.getSiteName()}—Registration`
    });
};

/* Get the about page */
const about = (req, res) => {
    res.render('about.pug', {
        title: `${globals.getSiteName()}—About`
    });
};

module.exports = {
    intro,
    login,
    register,
    qnr1,
    qnr2,
    qnr3,
    qnr_end,
    program_list,
    about
};