const express = require('express');
const router = express.Router();
const resultsCtrl = require('../../controllers/api/results');

//GET /api/results:quizId
router.get('/:quizId', resultsCtrl.getForQuiz);

module.exports = router;