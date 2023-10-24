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

