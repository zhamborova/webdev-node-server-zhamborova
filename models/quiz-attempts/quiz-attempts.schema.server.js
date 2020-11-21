const mongoose = require('mongoose')
const questionSchema = require('../questions/questions.schema.server')
const quizAttempts = mongoose.Schema({
    score: Number,
    quiz: {type: String, ref: 'QuizModel'},
    answers: [questionSchema],
    attempt: Number,
}, {collection: 'quizAttempts'})
module.exports = quizAttempts
