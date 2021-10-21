const router = require("express").Router();
const db = require("../models");

// needed? 
const path = require("path");

router.get("/", (req, res) =>
res.sendFile(path.join(__dirname, '../public/index.html'))
);

router.get('/stats', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/stats.html'))
);

router.get('/exercise', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
);


// get a workout
router.get("/api/workouts", (req, res) => {
db.Workout.find({})
.sort ({day: 1 })
.then (dbWorkout => {
  res.json(dbWorkout);
})
.catch(err => {
  res.json(err)
});
})




router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});



// Create new workout?? 
router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout)
    })
    .catch(err => {
      res.json(err);
    })
});


// add a NEW exercise ???

router.put("/api/workouts/:id", (req, res) => {
  workout.findOneAndUpdate(
    { _id: req.params.id },
    {
      $inc: { totalDuration: req.body.duration },
      $push: { exercises: req.body },
    },
    { new: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});



module.exports = router;

