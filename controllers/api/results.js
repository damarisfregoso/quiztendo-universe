const Result = require('../../models/result');

module.exports = {
  getForQuiz,
  makeChoice
}

async function getForQuiz(req, res) {
  const result = await Result.getForQuiz(req.user._id, req.params.quizId);
  res.json(result);
}

async function makeChoice(req, res) {
  const result = await Result.findOne({user: req.user._id, _id: req.params.resultId}).populate('quiz');
  const question = result.quiz.questions[result.answers.length];
  const choice = question.choices.id(req.params.choiceId);
  result.answers.push({
    sequence: question.sequence,
    choice: choice.choice,
    correct: choice.choice === question.correctChoice
  });
  result.inProgress = result.answers.length !== result.quiz.questions.length;
  await result.save();
  res.json(result);
}