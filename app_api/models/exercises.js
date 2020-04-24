// Require Mongoose so that you can use its methods.
const mongoose = require('mongoose');

// Define a schema for exercises
const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    equip: {
        type: [String],
        required: true,
        default: undefined
    },
    group: {
        type: String,
        enum: [
            'Chest',
            'Upper back',
            'Shoulders',
            'Biceps',
            'Triceps',
            'Core',
            'Lower body'
        ],
        required: true
    },
    desc: {
        type: String,
        default: 'empty'
    }
});

// Build a model called 'Exercise' using the exerciseSchema that we defined.
mongoose.model('Exercise', exerciseSchema);
