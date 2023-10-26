const Result = require('../../models/result');

module.exports = {
  getForQuiz,
  makeChoice,
  getBestResults
  // getLeaderBoard
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

async function getBestResults(req, res) {
  // Fetch quiz results for the user
  let results = await Result.find({ user: req.user._id, inProgress: false }).populate('quiz');

  results = results.reduce(function(acc, result) {
    const idx = acc.findIndex((r) => r.quiz._id.equals(result.quiz._id));
    if (idx === -1) {
      acc.push(result);
    } else {
      acc.splice(idx, 1, result);
    }
    return acc;
  }, []);
  console.log(results);

  res.json(results);
}



// async function getLeaderBoard(req, res) {
//   const quizId = req.params.quizId;
//   const leaderboard = await Result.find({quiz: quizId, 'answers.corrrect': true})
//   .populate('name', 'name')
//   .sort({ score: -1 })
//   .exec();
//   res.json(leaderboard);
// }