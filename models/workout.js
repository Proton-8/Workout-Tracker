// standard cut and paste for mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// new
const Workout = mongoose.model("workout", workoutSchema);

// new ==================  to be reviewed ??? 

const workoutSchema = new Schema({
  exercises: [
    {
       name: {
        type: String,
        required: "Enter name of exercise",
      },
      type: {
        type: String,
        required: "Enter type of exercise",
      },
      weight: {
        type: Number,
        required: "Enter weight of exercise",
      }, 
      sets: {
        type: Number,
        required: "Enter number of sets of exercise",
      },
      reps: {
        type: Number,
        required: "Enter number of reps of exercise",
      },
      distance: {
        type: Number,
        required: "Enter distance traveled",
      },
         duration: {
        type: Number,
        required: "Enter duration in minutes",
      },
    },
  ],
  day: {
    type: Date,
    default: Date.now(),
  },
});



module.exports = Workout;
