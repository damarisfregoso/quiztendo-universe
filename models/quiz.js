const mongoose = require('mongoose');
const Schema = mongoose.Schema

const choicesSchmea = new Schema({
  choiceText: { type: String, required: true },
  isCorrect: {type: Boolean, required: true },
});

const questionSchema = new Schema({
  prompt: { type: String, required: true },
  choices: [choicesSchmea]
});


const quizSchema = new Schema({
  title: { type: String, required: true },
  character: { type: String, required: true},
  questions: [questionSchema],
});

module.exports = mongoose.model('Quiz', quizSchema);