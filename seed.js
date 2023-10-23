require('dotenv').config();
require('./config/database');

const Quiz = require('./models/quiz');

(async function () {
  await Quiz.deleteMany({});
  const quizzes = await Quiz.create([
    {
      title: 'Luigi Quiz',
      character: 'Luigi',
      questions: [
        {
          prompt: "What is Luigi's relationship to Mario in the Super Mario series?",
          choices: [
            { choiceText: 'Cousin', isCorrect: false },
            { choiceText: 'Father', isCorrect: false },
            { choiceText: 'Brother', isCorrect: true },
            { choiceText: 'Friend', isCorrect: false },
          ],
        },
        {
          prompt: "In the Luigi's Mansion series, what is Luigi's primary tool for capturing ghosts?",
          choices: [
            { choiceText: 'A vacuum cleaner', isCorrect: true },
            { choiceText: 'A fishing rod', isCorrect: false },
            { choiceText: 'A net', isCorrect: false },
            { choiceText: 'A magic wand', isCorrect: false },
          ],
        },
        {
          prompt: "What color is Luigi's signature outfit?",
          choices: [
            { choiceText: 'Red and blue', isCorrect: false },
            { choiceText: 'Green and white', isCorrect: true },
            { choiceText: 'Yellow and purple', isCorrect: false },
            { choiceText: 'Orange and brown', isCorrect: false },
          ],
        },
        {
          prompt: "In which year did Luigi first appear in a video game alongside Mario in the arcade game 'Donkey Kong'?",
          choices: [
            { choiceText: '1980', isCorrect: false },
            { choiceText: '1985', isCorrect: true },
            { choiceText: '1990', isCorrect: false },
            { choiceText: '1995', isCorrect: false },
          ],
        },
        {
          prompt: "In the Super Smash Bros. series, what is Luigi's special move where he jumps high into the air and comes crashing down with a powerful punch?",
          choices: [
            { choiceText: 'Green Missile', isCorrect: false },
            { choiceText: 'Fireball', isCorrect: false },
            { choiceText: 'Super Jump Punch', isCorrect: true },
            { choiceText: 'Cyclone Spin', isCorrect: false },
          ],
        },
      ],
    },
    {
      title: 'Mario Quiz',
      character: 'Mario',
      questions: [
        {
          prompt: "Who is the primary antagonist in the Mario series and is constantly kidnapping Princess Peach?",
          choices: [
            { choiceText: 'Bowser', isCorrect: true },
            { choiceText: 'Wario', isCorrect: false },
            { choiceText: 'Luigi', isCorrect: false },
            { choiceText: 'Toad', isCorrect: false },
          ],
        },
        {
          prompt: "What is the name of Marios brother who often assists him on his adventures?",
          choices: [
            { choiceText: 'Waluigi', isCorrect: false },
            { choiceText: 'Yoshi', isCorrect: false },
            { choiceText: 'Luigi', isCorrect: true },
            { choiceText: 'Donkey Kong', isCorrect: false },
          ],
        },
        {
          prompt: "In the game 'Super Mario 64,' how many Power Stars does Mario need to collect to access Princess Peach's Castle's final level?",
          choices: [
            { choiceText: '70', isCorrect: false },
            { choiceText: '100', isCorrect: false },
            { choiceText: '120', isCorrect: true },
            { choiceText: '150', isCorrect: false },
          ],
        },
        {
          prompt: "Which iconic item gives Mario the ability to grow larger and break bricks when collected?",
          choices: [
            { choiceText: 'Super Mushroom', isCorrect: true },
            { choiceText: 'Fire Flower', isCorrect: false },
            { choiceText: '1-Up Mushroom', isCorrect: false },
            { choiceText: 'Starman', isCorrect: false },
          ],
        },
        {
          prompt: "What is the name of Mario's faithful dinosaur companion who first appeared in 'Super Mario World'?",
          choices: [
            { choiceText: 'Koopa Troopa', isCorrect: false },
            { choiceText: 'Goomba', isCorrect: false },
            { choiceText: 'Wiggler', isCorrect: false },
            { choiceText: 'Yoshi', isCorrect: true },
          ],
        },
      ],
    },
    {
      title: 'Bowser Quiz',
      character: 'Bowser',
      questions: [
        {
          prompt: "What is Bowser's primary motivation in the Super Mario series, often driving the game's plot?",
          choices: [
            { choiceText: 'To collect coins', isCorrect: false },
            { choiceText: 'To rescue Princess Peach', isCorrect: true },
            { choiceText: 'To defeat Mario', isCorrect: false },
            { choiceText: 'To acquire the Mushroom Kingdom', isCorrect: false },
          ],
        },
        {
          prompt: "What is the name of Bowser's castle in many Super Mario games, which often serves as a final level for players to conquer?",
          choices: [
            { choiceText: 'Mushroom Castle', isCorrect: false },
            { choiceText: 'Koopa Castle', isCorrect: false },
            { choiceText: "Peachs Castle", isCorrect: false },
            { choiceText: "Bowser's Castle", isCorrect: true },
          ],
        },
        {
          prompt: "In which Super Mario game did Bowser first appear as the main antagonist and kidnapper of Princess Peach?",
          choices: [
            { choiceText: 'Super Mario Bros.', isCorrect: true },
            { choiceText: 'Super Mario 64', isCorrect: false },
            { choiceText: 'Super Mario World', isCorrect: false },
            { choiceText: 'Super Mario Sunshine', isCorrect: false },
          ],
        },
        {
          prompt: "What species is Bowser in the Super Mario series, distinguishing him from the other characters in the games?",
          choices: [
            { choiceText: 'Koopa Troopa', isCorrect: false },
            { choiceText: 'Goomba', isCorrect: false },
            { choiceText: 'Wiggler', isCorrect: false },
            { choiceText: 'Koopa King', isCorrect: true },
          ],
        },
        {
          prompt: "Bowser often has a group of loyal henchmen who help him carry out his plans. What are these henchmen called?",
          choices: [
            { choiceText: 'The Goonies', isCorrect: false },
            { choiceText: 'The Koopalings', isCorrect: true },
            { choiceText: 'The Toadies', isCorrect: false },
            { choiceText: 'The Cheep Cheeps', isCorrect: false },
          ],
        },
      ],
    }
  ]);

  console.log(quizzes)
  process.exit();
})();