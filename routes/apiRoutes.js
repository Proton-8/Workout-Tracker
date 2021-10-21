const router = require("express").Router();
const db = require("../models");
const path = require("path");


router.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);
router.get("/stats", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/stats.html"))
);
router.get("/exercise", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
);

// --------------------------------------------------------

// code clean up - common route
router
  .route("/api/workouts")
  .post((req, res) => {
    db.Workout.create(req.body)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  })
  .get((req, res) => {
    db.Workout.aggregate([{
      $addFields: {
          totalDuration: { $sum: "$exercises.duration" }
      }
  }])
  .then(dbWorkout => {
      res.json(dbWorkout);
  })
  .catch(err => {
      res.json(err);
  });
});

// old code=================

  //   db.Workout.find({})
  //     .sort({ day: 1 })
  //     .then((dbWorkout) => {
  //       res.json(dbWorkout);
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
  // });



// get last 7 days of workouts
router.get("/api/workouts/range", (req, res) => {
  db.Workout.aggregate([{
              $addFields: {
                  totalDuration: { $sum: "$exercises.duration" }
              }
          },
          { $sort: { day: -1 } },
          { $limit: 7 }
      ])
      .then(dbWorkout => {
          res.json(dbWorkout);
      })
      .catch(err => {
          res.json(err);
      });
});




// add a NEW exercise ???

router.put("/api/workouts/:id", (req, res) => {
  db.Workout
    .findOneAndUpdate(
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
