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
  }, 
  inProgress: {
    type: Boolean, 
    default: true,
  }, 
  answers: [
    {
      sequence: {type: Number, required: true },
      choice: {type:String, required: true },
      correct: {type: Boolean, required: true},
    }
  ]
}, {
  timestamps: true,
  toJSON: {virtuals: true}
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

  return Math.round((numCorrect / numAnswered) * 100, 0);
});

resultSchema.statics.getForQuiz = function(userId, quizId) {
  // 'this' is bound to the model (don't use an arrow function)
  // return the promise that resolves to a result 
  return this.findOneAndUpdate(
    // query
    { user: userId, inProgress: true, quiz: quizId },
    // update - in the case the order (cart) is upserted
    { user: userId, quiz: quizId },
    // upsert option creates the doc if it doesn't exist!
    { upsert: true, new: true }
  ).populate('quiz');
};

module.exports = mongoose.model('Result', resultSchema);
