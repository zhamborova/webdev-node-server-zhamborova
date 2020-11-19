const express = require("express")
const app = express()
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
      'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/whiteboard', {useNewUrlParser: true});
//
// const quizSchema = mongoose.Schema({
//   name: String,
//   avg: Number
// }, {collection: "quizzes"})
//
// const quizModel = mongoose.model("QuizModel", quizSchema)

// quizModel.find()
//   .then(quizzes => console.log(quizzes))
//

require("./controllers/quizzes-controller")(app)
require("./controllers/questions-controller")(app)

app.get("/", (req, res) => res.send("hi"))

app.listen(3000)
