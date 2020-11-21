const express = require("express")
const app = express()
var cors = require('cors')
var bodyParser = require('body-parser')
const quizzesService = require('./services/quizzes.services')
const qService = require('./services/questions.services')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const mongoose = require('mongoose');
const uri = "mongodb+srv://89034970304Zz:89034970304Zz@cluster0.wqibe.mongodb.net/whiteboard?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true });

require("./controllers/quizzes-controller")(app)
require("./controllers/questions-controller")(app)
require("./controllers/general")(app)
require('./controllers/quiz-attempts.controller.server')(app)

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
      'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});



//qService.findQuestionsForQuiz("123").then(qs => console.log(qs))


app.listen(process.env.PORT || 3000,(pr)=>{
   console.log("listening on port:3000")
})
