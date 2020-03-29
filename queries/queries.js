// Here are some queries I played around with in mongo shell.

db.exercises.insertOne({
    equip: ['BB', 'DB'],
    name: 'Flat Bench Press',
    group: 'Chest',
    desc: 'null'
})

db.exercises.insertMany([{
    equip: ['BB', 'DB'],
    name: 'Flat Bench Press',
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
}])