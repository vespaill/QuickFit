use quickfit;

db.exercises.insertMany([{
    equip: ["BB", "DB"],
    name: "Flat Bench Press",
    group: "Chest",
    desc: "1. Lie down on a flat bench.<br/><br/>2. Create upper back tightness: Pull your shoulder together; bring them back and down. This will bring your chest out. (If you want to press heavy weight, you need a solid platform to press from. Your back is the platform that you’re going to press from).<br/><br/>3. Feet Position: Your feet can be flat on the ground or brought in towards yourself to the point where your heels raise off the ground. At any rate, make sure you have solid contact against the floor. Don’t dance with your feet!<br/><br/>4. Arc: You can create some arching on your lower back, but keep it reasonable. Make sure your upper back and butt are stable on the bench at all times.<br/><br/>5. Find your grip: Generally this would be just wider than shoulder-width. Ideally, this would be the grip that allows your forearms to be perpendicular to the ground when the barbell is resting on your chest. Make sure your wrists are straight (your knuckles are facing the ceiling).<br/><br/>6. Unrack the bar: You don’t want to lose your upper back tightness, so don’t push the bar when unracking. Instead, squeeze the bar and pull it out with your lats. <br/><br/>7. Brace; inhale, hold it, and forcefully attempt to exhale against a closed airway.<br/><br/>8. Descend: Now you’re holding the bar above your neck with arms straight. In a controlled manner, bring the weight down to your middle or lower chest. You don’t want to bring the weight down to your neck or upper chest, so the elbows must tuck in slightly as you descend. In contrast to the Squat and Deadlift, the bar path for the bench press will not be straight up and down, but rather diagonal.<br/><br/>9. Ascend: Once the weight touches your mid/lower chest, press the weight up and untuck your elbows as you do. You may exhale during the ascend. <br/><br/>10. Leg-drive: You may press against the ground with your feet, especially during the ascend, as long as your butt stays on the bench."
}, {
    equip: ["BE"],
    name: "Dips",
    group: "Chest",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["BB", "DB"],
    name: "Incline Press",
    group: "Chest",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["BW"],
    name: "Push Up",
    group: "Chest",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["C"],
    name: "Triceps Pushdown",
    group: "Triceps",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["BB", "DB"],
    name: "Skullcrusher",
    group: "Triceps",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["BB"],
    name: "Overhead Press",
    group: "Shoulders",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["DB"],
    name: "Arnorld Press",
    group: "Shoulders",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["C", "DB"],
    name: "Anterior Delt Raise",
    group: "Shoulders",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["C", "DB"],
    name: "Lateral Delt Raise",
    group: "Shoulders",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["C", "DB"],
    name: "Posterior Delt Raise",
    group: "Shoulders",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["BE"],
    name: "Pull Up",
    group: "Upper back",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["C", "M"],
    name: "Lat Pulldown",
    group: "Upper back",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["C"],
    name: "Straight-arm Lat Pulldown",
    group: "Upper back",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["C", "DB", "M"],
    name: "Reverse Fly",
    group: "Upper back",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["C", "DB"],
    name: "Row",
    group: "Upper back",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["C", "DB"],
    name: "Preacher Curl",
    group: "Biceps",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["C", "DB"],
    name: "Hammer Curl",
    group: "Biceps",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["BE"],
    name: "Hanging Leg Raise",
    group: "Core",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["BE"],
    name: "Plank",
    group: "Core",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["C"],
    name: "Cable Crunch",
    group: "Core",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["BE"],
    name: "Decline Crunch",
    group: "Core",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["BE"],
    name: "Oblique Twists",
    group: "Core",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["BB", "DB"],
    name: "High-bar Squat",
    group: "Lower body",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["BB", "DB"],
    name: "Low-bar Squat",
    group: "Lower body",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["BB"],
    name: "Conventional Deadlift",
    group: "Lower body",
    desc: "1. Place barbell over midfoot; keep shins about 1 inch away from the bar.<br/><br/>2. Bend over. Stop bending at the knees as soon as shins touch the bar. Continue bending at the hips until you can reach the bar.<br/><br/>3. Find your grip on the bar. Shoulder-width is fine.<br/><br/>4. Brace; inhale, hold it, and forcefully attempt to exhale against a closed airway.<br/><br/>5. Tighten-up; bring your chest out, straighten your back, squeeze the bar.<br/><br/>6. Before standing up with the weight, pull slightly and feel the weight of the bar on your hands.<br/><br/>7. Stand up with the weight and exhale at or near the top.<br/><br/>8. Beware of straightening knees before hips or vice-versa. As you stand, knees should lock out in sync with hips."
}, {
    equip: ["M"],
    name: "Leg Press",
    group: "Lower body",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["M"],
    name: "Leg Curl",
    group: "Lower body",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["M"],
    name: "Leg Extension",
    group: "Lower body",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["BW"],
    name: "Single-leg Bridge",
    group: "Lower body",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["M"],
    name: "Standing Calf Raise",
    group: "Lower body",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["M"],
    name: "Seated Calf Raise",
    group: "Lower body",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}, {
    equip: ["C"],
    name: "Hip Abduction",
    group: "Lower body",
    desc: "Cillum id pariatur laboris exercitation. In nostrud aute Lorem consectetur laboris amet. Non consequat ipsum eu laboris consequat. Anim do exercitation laborum amet reprehenderit deserunt. Commodo magna eiusmod ex consectetur est quis pariatur nulla ipsum. Mollit occaecat velit anim incididunt veniam Lorem adipisicing. Est sint amet et incididunt adipisicing esse sunt proident duis consectetur.Exercitation nulla labore laboris cillum ut magna velit consequat eiusmod enim ex. Laboris Lorem quis ipsum occaecat. Et eu non ex laboris elit ad est proident fugiat nulla ea. Commodo amet sint pariatur aliqua incididunt dolor laborum qui sit in eu. Consectetur do qui sint consequat fugiat qui sint id laboris est."
}]);