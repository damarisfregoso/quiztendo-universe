const Quiz = require('../../models/quiz');

module.exports = {
  getAll, 
  getOne, 
}

async function getAll(req, res) {
  const quizzes = await Quiz.find({});
  res.json(quizzes);
}
async function getOne(req, res) {
  const quiz = await Quiz.findById(req.params.quizId);
  res.json(quiz);
}