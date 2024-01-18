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
  // Sort users by average score in descending order
  const sortedLeaderboard = Object.values(userStats).sort((a, b) => {
    const avgScoreA = a.numQuizzes > 0 ? a.totalScore / a.numQuizzes : 0;
    const avgScoreB = b.numQuizzes > 0 ? b.totalScore / b.numQuizzes : 0;

    if (avgScoreA === avgScoreB) {
      // If average scores are equal, sort by the number of quizzes (ascending)
      return a.numQuizzes - b.numQuizzes;
    }

    // Sort by average score (descending)
    return avgScoreB - avgScoreA;
  });
  res.json(sortedLeaderboard);
};