const router = require("express").Router();
// const Transaction = require("../models/transaction.js");

// needed? 
const path = require("path");



router.get("/exercise", (req, res) => {
  res.sendFile(path.join(_dirname, '../public/exercise.html'))
})
  .catch(err => {
    res.json(err);

    // or this ??----------------------------------

    // .catch(err => {
    //       res.status(400).json(err);
    //     });
  });

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
})
.catch(err => {
  res.json(err);
});
;

router.get("/stats", (req, res) => {
  res.sendFile(path.join(_dirname, '../public/stats.html'))
})
  .catch(err => {
    res.json(err);
  });


router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
})
  .catch(err => {
    res.json(err);
  });






// edit this section -------------

// router.post("/api/transaction", ({ body }, res) => {
//   Transaction.create(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.get("/api/transaction", (req, res) => {
//   Transaction.find({})
//     .sort({ date: -1 })
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// add a NEW exercise

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


//  new stuff 


