const mongoose = require('mongoose');
const Schema = mongoose.Schema

const resultSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }, 
  quiz: {
    type: Schema.Types.ObjectId,
    ref: 'Quiz',
    required: true,
  }, inProgress: {
    type: Boolean, 
    required: true,
  }, 
  answers: [
    {
      sequence: {type: Number, required: true },
      choice: {type:String, required: true },
      correct: {type: Boolean, required: true},
    }
  ]
});

resultSchema.virtual('numCorrect').get(function() {
  return this.answers.filter((answer) => answer.correct).length;
});

resultSchema.virtual('numAnswered').get(function() {
  return this.answers.length;
});

resultSchema.virtual('score').get(function() {
  const numCorrect = this.numCorrect;
  const numAnswered = this.numAnswered;

  if (numAnswered === 0) {
    return 0; // Avoid division by zero
  }

  return (numCorrect / numAnswered) * 100;
});

module.exports = mongoose.model('Result', resultSchema);
