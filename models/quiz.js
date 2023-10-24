const mongoose = require('mongoose');
const Schema = mongoose.Schema

const choicesSchema = new Schema({
  choice: {
    type: String,
    required: true,
  },
  prompt: {
    type: String,
    required: true,
  },
});

const questionSchema = new Schema({
  sequence: {
    type: Number,
    required: true,
  },
  prompt: {
    type: String,
    required: true,
  },
  correctChoice: {
    type: String,
    required: true,
  },
  choices: [choicesSchema],
});

const quizSchema = new Schema({
  character: { type: String, required: true},
  title: { type: String, required: true },
  questions: [questionSchema],
});


module.exports = mongoose.model('Quiz', quizSchema);