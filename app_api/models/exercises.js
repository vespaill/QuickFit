// Require Mongoose so that you can use its methods.
const mongoose = require('mongoose');

// Define a schema for exercises
const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    equip: {
        type: String,
        required: true
    },
    group: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});



// Build a model of the execises schema.
mongoose.model('Exercise', exerciseSchema);
