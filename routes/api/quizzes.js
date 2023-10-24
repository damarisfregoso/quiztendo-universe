const express = require('express');
const router = express.Router();
const quizzesCtrl = require('../../controllers/api/quizzes');

//GET /api/quizzes
router.get('/', quizzesCtrl.getAll);
//GET /api/quizzes:quizId
router.get('/:quizId', quizzesCtrl.getOne);

module.exports = router;