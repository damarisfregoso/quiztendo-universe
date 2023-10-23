const express = require('express');
const router = express.Router();
const quizzesCtrl = require('../../controllers/api/quizzes');

//GET /api/quizzes
router.get('/:character', quizzesCtrl.getQuizzesForChars);

module.exports = router;