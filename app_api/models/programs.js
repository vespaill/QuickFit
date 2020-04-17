// Require Mongoose so that you can use its methods.
const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
    // TODO: Keep or remove program name? (if only 1 program per user then remove)
    // TODO: Add username field to tie a program to a user
    // Program name
    name: {
        type: String,
        required: true
    },
    // List of exercises
    exercises: [{
        // Reference to the exercise
        exercise: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            // Name of the referenced document
            ref: 'Exercise'
        },
        // Attributes of the referenced exercise
        dayOfWeek: {
            type: Number,
            required: true
        },
        reps: {
            type: Number,
            required: true
        },
        weight: {
            type: Number,
            required: true
        }
    }],
    // Optional description
    desc: {
        type: String,
        default: 'empty'
    }
});

mongoose.model('Program', programSchema);

const Program_model = mongoose.model('Program');

// Create a default program if none exists
// This is temporary, ideally, there would be a program created for each user when they register
Program_model.find((err, programs) => {
    if (!err && programs.length < 1) {
        // Create default program with no exercises
        Program_model.create({
            name: "Default",
            desc: "Default program"
        });
    }
});