const debug = require('debug')('app-svr:ctrl/public ---->');

/* Get the intro page */
const intro = (req, res) => {
    /* Defines the route, using the view template 'intro.pug'
       Passes an object with variables to be used in the view. */
    res.render('intro.pug', {
        title: '',
        introMsg: 'QuickFit is a progressive web application designed to help people meet their fitness goals, whatever they may be. QuickFit has been created from the ground-up with beginners in mind. It aims to remove needless complexities that are often experienced by the beginner when choosing a workout program. Click below to find a workout program tailored to your needs by going through our questionnaire.'
    });

};

/* Get the questionnaire pages */
const questionnaire = (req, res) => {
    res.render('questionnaire.pug', {
        title: '—Questionnaire',
    });
};

const program_list = (req, res) => {
    res.render('program-list.pug', {
        title: '—Programs',
        programs: ['Gorilla Gains', 'Lipids Annihilator', 'Anabolic Beast',
                   'Catabolic ReactX', 'Look Like I\'m On Steroids',
                   'Belly Deflator', 'Lipocyte Chemotherapy', 'Rocky Montage',
                   'The Terminator']
    });
}

module.exports = {
    intro,
    questionnaire,
    program_list
};