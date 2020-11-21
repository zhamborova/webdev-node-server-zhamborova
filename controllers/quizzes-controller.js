const quizzesService = require('../services/quizzes.services')
module.exports = function (app) {
  app.get('/api/quizzes', (req, res) =>
      quizzesService.findAllQuizzes()
          .then(allQuizzes => res.json(allQuizzes)))
  app.get('/api/quizzes/:qzid', (req, res) =>
      quizzesService.findQuizById(req.params['qzid'])
          .then(quiz => res.json(quiz)))
}
