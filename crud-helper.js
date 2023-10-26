// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Quiz = require('./models/quiz');
const Result = require('./models/result');

// Local variables will come in handy for holding retrieved documents
let quiz, quizzes;
let result, results;
let user, users;

