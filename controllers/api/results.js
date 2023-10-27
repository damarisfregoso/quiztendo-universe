const Result = require('../../models/result');

module.exports = {
  getForQuiz,
  makeChoice,
  getBestResults,
  getLeaderBoard
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

// async function getBestResults(req, res) {
//   // Fetch quiz results for the user
//   let results = await Result.find({ user: req.user._id, inProgress: false }).populate('quiz');

//   results = results.reduce(function(acc, result) {
//     const idx = acc.findIndex((r) => r.quiz._id.equals(result.quiz._id));
//     if (idx === -1) {
//       acc.push(result);
//     } else {
//       acc.splice(idx, 1, result);
//     }
//     return acc;
//   }, []);
//   console.log(results);

//   res.json(results);
// }

async function getBestResults(req, res) {
  const results = await Result.find({ user: req.user._id, inProgress: false }).populate('quiz');

  // Group results by quiz and calculate average score for each quiz
  const quizResults = results.reduce((acc, result) => {
    const quizId = result.quiz._id;
    if (!acc[quizId]) {
      acc[quizId] = {
        quiz: result.quiz,
        scores: [],
      };
    }
    acc[quizId].scores.push(result.score);
    return acc;
  }, {});

  const combinedResults = Object.values(quizResults).map((quizResult) => {
    const averageScore =
      quizResult.scores.reduce((total, score) => total + score, 0) / quizResult.scores.length;
    return {
      quiz: quizResult.quiz,
      averageScore,
    };
  });

  res.json(combinedResults);
};

async function getLeaderBoard(req, res) {
  const quizId = req.params.quizId;
  // Fetch results for the specified quiz, populate user information, and filter by inProgress: false
  const leaderboard = await Result.find({ quiz: quizId, 'answers.correct': true })
    .populate('user', 'name')
    .sort({ score: -1 })
    .exec();
  // Calculate the number of quizzes each user has taken and the average score
  const userStats = leaderboard.reduce((acc, result) => {
    const userName = result.user.name;
    if (!acc[userName]) {
      acc[userName] = {
        user: userName,
        numQuizzes: 0,
        totalScore: 0,
      };
    }
    acc[userName].numQuizzes++;
    acc[userName].totalScore += result.score;
    return acc;
  }, {});
  const finalLeaderboard = Object.values(userStats)
    .sort((a, b) => {
      // Sort first by the number of quizzes, and then by average score
      if (b.numQuizzes === a.numQuizzes) {
        return b.totalScore / b.numQuizzes - a.totalScore / a.numQuizzes;
      }
      return b.numQuizzes - a.numQuizzes;
    });
  res.json(finalLeaderboard);
};