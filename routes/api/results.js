const express = require('express');
const router = express.Router();
const resultsCtrl = require('../../controllers/api/results');

//GET /api/results/:quizId
router.get('/:quizId', resultsCtrl.getForQuiz);
//PUT /api/results/:resultId/choices/:choiceId
router.put('/:resultId/choices/:choiceId', resultsCtrl.makeChoice);

module.exports = router;