const express = require('express');
const router = express.Router();
const resultsCtrl = require('../../controllers/api/results');


// GET /api/results
router.get('/best-for-user', resultsCtrl.getBestResults);
//GET /api/results/:quizId
router.get('/:quizId', resultsCtrl.getForQuiz);
//PUT /api/results/:resultId/choices/:choiceId
router.put('/:resultId/choices/:choiceId', resultsCtrl.makeChoice);

//GET /api/results/leaderboard/:quizId
router.get('/leaderboard/:quizId', resultsCtrl.getLeaderBoard);

module.exports = router;