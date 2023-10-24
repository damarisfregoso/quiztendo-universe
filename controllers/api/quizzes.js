const Quiz = require('../../models/quiz');

module.exports = {
  getAll
}

async function getAll(req, res) {
  const quizzes = await Quiz.find({});
  res.json(quizzes);
}