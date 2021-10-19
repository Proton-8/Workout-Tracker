// standard cut and paste for mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// new ==================  to be updated ??? 

const workoutSchema = new Schema({
  exercise: [
    {
      type: {
        type: String,
        required: "Enter type of exercise",
      },
      name: {
        type: String,
        required: "Enter name of exercise",
      },
      duration: {
        type: Number,
        required: "Enter duration in minutes",
      },
      distance: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
    },
  ],
  day: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
