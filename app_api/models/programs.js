// Require Mongoose so that you can use its methods.
const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  // Program name
  name: {
    type: String,
    required: true,
    trim: true,
    default: 'Default Program',
    maxlength: 50
  },
  // List of exercises
  exercises: [
    {
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
    }
  ],
  // Optional description
  desc: {
    type: String,
    default: 'empty'
  }
});

mongoose.model('Program', programSchema);
