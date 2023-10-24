const Result = require('../../models/result');

module.exports = {
  getForQuiz
}

async function getForQuiz(req, res) {
  const result = await Result.getForQuiz(req.user._id, req.params.quizId);
  res.json(result);
}