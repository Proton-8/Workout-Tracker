const express = require('express');
const mongoose = require("mongoose");

// need this???
// const logger = require("morgan");

// default port information - set port or get default of 3001
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
 {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// the new route
app.use(require("./routes/apiRoutes.js"));

app.listen(PORT, () => {
  console.log(`App running on: http://localhost:${PORT}`);
});



