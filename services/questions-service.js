let questions = require("./questions.json")

const findAllQuestions = () => questions
const findQuestionsForQuiz = (qid) => questions.filter(q => q.quizId === qid)
console.log(questions)
module.exports = {
  findAllQuestions, findQuestionsForQuiz
}
