const Quiz = require('../../models/quiz');

module.exports = {
  getQuizzesForChars
}

async function getQuizzesForChars(res, req) {
  const character = req.params.character;
  const quizzes = await Quiz.find({ character: character});
  res.json(quizzes);
}