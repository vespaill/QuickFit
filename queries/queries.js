// Here are some queries I played around with in mongo shell.

db.exercises.insertOne({
    equip: ['BB', 'DB'],
    name: 'Flat Bench Press',
    group: 'Chest',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
})

db.exercises.insertMany([{
    equip: ['BB', 'DB'],
    name: 'Flat Bench Press',
    group: 'Chest',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['BE'],
    name: 'Dips',
    group: 'Chest',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['BB', 'DB'],
    name: 'Incline Press',
    group: 'Chest',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['BW'],
    name: 'Push Up',
    group: 'Chest',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['C'],
    name: 'Triceps Pushdown',
    group: 'Triceps',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['BB', 'DB'],
    name: 'Skullcrusher',
    group: 'Triceps',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['BB'],
    name: 'Overhead Press',
    group: 'Shoulders',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['DB'],
    name: 'Arnorld Press',
    group: 'Shoulders',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['C', 'DB'],
    name: 'Anterior Delt Raise',
    group: 'Shoulders',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['C', 'DB'],
    name: 'Lateral Delt Raise',
    group: 'Shoulders',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['C', 'DB'],
    name: 'Posterior Delt Raise',
    group: 'Shoulders',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['BE'],
    name: 'Pull Up',
    group: 'Upper back',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['C', 'M'],
    name: 'Lat Pulldown',
    group: 'Upper back',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['C'],
    name: 'Straight-arm Lat Pulldown',
    group: 'Upper back',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['C', 'DB', 'M'],
    name: 'Reverse Fly',
    group: 'Upper back',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['C', 'DB'],
    name: 'Row',
    group: 'Upper back',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['C', 'DB'],
    name: 'Preacher Curl',
    group: 'Biceps',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['C', 'DB'],
    name: 'Hammer Curl',
    group: 'Biceps',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['BE'],
    name: 'Hanging Leg Raise',
    group: 'Core',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['BE'],
    name: 'Plank',
    group: 'Core',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['C'],
    name: 'Cable Crunch',
    group: 'Core',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['BE'],
    name: 'Decline Crunch',
    group: 'Core',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['BE'],
    name: 'Oblique Twists',
    group: 'Core',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['BB', 'DB'],
    name: 'High-bar Squat',
    group: 'Lower body',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['BB', 'DB'],
    name: 'Low-bar Squat',
    group: 'Lower body',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['BB'],
    name: 'Conventional Deadlift',
    group: 'Lower body',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['M'],
    name: 'Leg Press',
    group: 'Lower body',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['M'],
    name: 'Leg Curl',
    group: 'Lower body',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['M'],
    name: 'Leg Extension',
    group: 'Lower body',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['BW'],
    name: 'Single-leg Bridge',
    group: 'Lower body',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['M'],
    name: 'Standing Calf Raise',
    group: 'Lower body',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['M'],
    name: 'Seated Calf Raise',
    group: 'Lower body',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}, {
    equip: ['C'],
    name: 'Hip Abduction',
    group: 'Lower body',
    desc: 'Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est.'
}])