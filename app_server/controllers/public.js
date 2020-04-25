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
const qnr1 = (req, res) => {
    res.render('questionnaire.pug', {
        title: '—Questionnaire',
        savedAnswers: [],
        question: 'What is your fitness goal?',
        options: ['Gain Muscle', 'Maintain Weight', 'Burn Fat'],
        prev: '/',      /* url for previous page */
        next: 'qnr2'    /* url for next page */
    });
};
const qnr2 = (req, res) => {
    res.render('questionnaire.pug', {
        title: '—Questionnaire',
        savedAnswers: ['saved#1'],
        question: 'How many days a week will you train?',
        options: ['3', '4', '5', '6'],
        prev: 'qnr1',
        next: 'qnr3'
    });
};
const qnr3 = (req, res) => {
    res.render('questionnaire.pug', {
        title: '—Questionnaire',
        savedAnswers: ['saved#1', 'saved#2'],
        question: 'How much work will you put in per session?',
        options: ['9', '15', '21+'],
        prev: 'qnr2',
        next: 'qnr-end'
    });
};
const qnr_end = (req, res) => {
    res.render('qnr-end.pug', {
        title: '—Questionnaire',
        savedAnswers: ['saved#1', 'saved#2', 'saved#2'],
        recommended_program: '${Recommended Program}',
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
    qnr1,
    qnr2,
    qnr3,
    qnr_end,
    program_list
};