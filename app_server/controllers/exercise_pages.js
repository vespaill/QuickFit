const myGlobals = require('./myGlobals.js');

const exercises = (req, res) => {
    res.render('exercises.pug', {
        title: `${myGlobals.website_name()}—exercises`,
        exercises: [{
            equip: ['BB', 'DB'],
            name: 'Flat Bench Press',
            group: 'Chest',
            desc: 'null'
            // desc: '1. Lie down on a flat bench.\n2. Create upper back tightness: Pull your shoulder together; bring them back and down. This will bring your chest out. (If you want to press heavy weight, you need a solid platform to press from. Your back is the platform that you’re going to press from).\n3. Feet Position: Your feet can be flat on the ground or brought in towards yourself to the point where your heels raise off the ground. At any rate, make sure you have solid contact against the floor. Don’t dance with your feet!\n4. Arc: You can create some arching on your lower back, but keep it reasonable. Make sure your upper back and butt are stable on the bench at all times.\n5. Find your grip: Generally this would be just wider than shoulder-width. Ideally, this would be the grip that allows your forearms to be perpendicular to the ground when the barbell is resting on your chest. Make sure your wrists are straight (your knuckles are facing the ceiling).\n6. Unrack the bar: You don’t want to lose your upper back tightness, so don’t push the bar when unracking. Instead, squeeze the bar and pull it out with your lats.\n7. Brace; inhale, hold it, and forcefully attempt to exhale against a closed airway.\n8. Descend: Now you’re holding the bar above your neck with arms straight. In a controlled manner, bring the weight down to your middle or lower chest. You don’t want to bring the weight down to your neck or upper chest, so the elbows must tuck in slightly as you descend. In contrast to the Squat and Deadlift, the bar path for the bench press will not be straight up and down, but rather diagonal.\n9. Ascend: Once the weight touches your mid/lower chest, press the weight up and untuck your elbows as you do. You may exhale during the ascend.\n10. Leg-drive: You may press against the ground with your feet, especially during the ascend, as long as your butt stays on the bench.\n'
        }, {
            equip: ['C'],
            name: 'Cable Crossover',
            group: 'Chest',
            desc: 'null'
        }, {
            equip: ['BE'],
            name: 'Dips',
            group: 'Chest',
            desc: 'null'
        }, {
            equip: ['BB', 'DB'],
            name: 'Incline Press',
            group: 'Chest',
            desc: 'null'
        }, {
            equip: ['BW'],
            name: 'Push Up',
            group: 'Chest',
            desc: 'null'
        }, {
            equip: ['C'],
            name: 'Triceps Pushdown',
            group: 'Triceps',
            desc: 'null'
        }, {
            equip: ['BB', 'DB'],
            name: 'Skullcrusher',
            group: 'Triceps',
            desc: 'null'
        }, {
            equip: ['BB'],
            name: 'Overhead Press',
            group: 'Shoulders',
            desc: 'null'
        }, {
            equip: ['DB'],
            name: 'Arnorld Press',
            group: 'Shoulders',
            desc: 'null'
        }, {
            equip: ['C', 'DB'],
            name: 'Anterior Delt Raise',
            group: 'Shoulders',
            desc: 'null'
        }, {
            equip: ['C', 'DB'],
            name: 'Lateral Delt Raise',
            group: 'Shoulders',
            desc: 'null'
        }, {
            equip: ['C', 'DB'],
            name: 'Posterior Delt Raise',
            group: 'Shoulders',
            desc: 'null'
        }, {
            equip: ['BE'],
            name: 'Pull Up',
            group: 'Upper back',
            desc: 'null'
        }, {
            equip: ['C', 'M'],
            name: 'Lat Pulldown',
            group: 'Upper back',
            desc: 'null'
        }, {
            equip: ['C'],
            name: 'Straight-arm Lat Pulldown',
            group: 'Upper back',
            desc: 'null'
        }, {
            equip: ['C', 'DB', 'M'],
            name: 'Reverse Fly',
            group: 'Upper back',
            desc: 'null'
        }, {
            equip: ['C', 'DB'],
            name: 'Row',
            group: 'Upper back',
            desc: 'null'
        }, {
            equip: ['C', 'DB'],
            name: 'Preacher Curl',
            group: 'Biceps',
            desc: 'null'
        }, {
            equip: ['C', 'DB'],
            name: 'Hammer Curl',
            group: 'Biceps',
            desc: 'null'
        }, {
            equip: ['BE'],
            name: 'Hanging Leg Raise',
            group: 'Core',
            desc: 'null'
        }, {
            equip: ['BE'],
            name: 'Plank',
            group: 'Core',
            desc: 'null'
        }, {
            equip: ['C'],
            name: 'Cable Crunch',
            group: 'Core',
            desc: 'null'
        }, {
            equip: ['BE'],
            name: 'Decline Crunch',
            group: 'Core',
            desc: 'null'
        }, {
            equip: ['BE'],
            name: 'Oblique Twists',
            group: 'Core',
            desc: 'null'
        }, {
            equip: ['BB', 'DB'],
            name: 'High-bar Squat',
            group: 'Lower body',
            desc: 'null'
        }, {
            equip: ['BB', 'DB'],
            name: 'Low-bar Squat',
            group: 'Lower body',
            desc: 'null'
        }, {
            equip: ['BB'],
            name: 'Conventional Deadlift',
            group: 'Lower body',
            desc: 'null'
        }, {
            equip: ['M'],
            name: 'Leg Press',
            group: 'Lower body',
            desc: 'null'
        }, {
            equip: ['M'],
            name: 'Leg Curl',
            group: 'Lower body',
            desc: 'null'
        }, {
            equip: ['M'],
            name: 'Leg Extension',
            group: 'Lower body',
            desc: 'null'
        }, {
            equip: ['BW'],
            name: 'Single-leg Bridge',
            group: 'Lower body',
            desc: 'null'
        }, {
            equip: ['M'],
            name: 'Standing Calf Raise',
            group: 'Lower body',
            desc: 'null'
        }, {
            equip: ['M'],
            name: 'Seated Calf Raise',
            group: 'Lower body',
            desc: 'null'
        }, {
            equip: ['C'],
            name: 'Hip Abduction',
            group: 'Lower body',
            desc: 'null'
        }
        ]
    });
};

module.exports = {
    exercises
};