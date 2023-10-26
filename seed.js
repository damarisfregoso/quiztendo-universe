require('dotenv').config();
require('./config/database');

const Quiz = require('./models/quiz');

(async function () {
  await Quiz.deleteMany({});
  const quizzes = await Quiz.create([
    {
      character: 'Luigi',
      title: 'Luigi Quiz 1',
      questions: [
        {
          sequence: 1,
          prompt: "What is Luigi's relationship to Mario in the Super Mario series?",
          correctChoice: 'C',
          choices: [
            { choice: 'A', prompt: 'Cousin' },
            { choice: 'B', prompt: 'Father' },
            { choice: 'C', prompt: 'Brother' },
            { choice: 'D', prompt: 'Friend' },
          ],
        },
        {
          sequence: 2,
          prompt: "In the Luigi's Mansion series, what is Luigi's primary tool for capturing ghosts?",
          correctChoice: 'A',
          choices: [
            { choice: 'A', prompt: 'A vacuum cleaner' },
            { choice: 'B', prompt: 'A fishing rod' },
            { choice: 'C', prompt: 'A net' },
            { choice: 'D', prompt: 'A magic wand' },
          ],
        },
        {
          sequence: 3,
          prompt: "What color is Luigi's signature outfit?",
          correctChoice: 'B',
          choices: [
            { choice: 'A', prompt: 'Red and blue' },
            { choice: 'B', prompt: 'Green and white' },
            { choice: 'C', prompt: 'Yellow and purple' },
            { choice: 'D', prompt: 'Orange and brown' },
          ],
        },
        {
          sequence: 4,
          prompt: "In which year did Luigi first appear in a video game alongside Mario in the arcade game 'Donkey Kong'?",
          correctChoice: 'B',
          choices: [
            { choice: 'A', prompt: '1980' },
            { choice: 'B', prompt: '1985' },
            { choice: 'C', prompt: '1990' },
            { choice: 'D', prompt: '1995' },
          ],
        },
        {
          sequence: 5,
          prompt: "In the Super Smash Bros. series, what is Luigi's special move where he jumps high into the air and comes crashing down with a powerful punch?",
          correctChoice: 'C',
          choices: [
            { choice: 'A', prompt: 'Green Missile' },
            { choice: 'B', prompt: 'Fireball' },
            { choice: 'C', prompt: 'Super Jump Punch' },
            { choice: 'D', prompt: 'Cyclone Spin' },
          ],
        },
      ],
    },
    {
      character: 'Luigi',
      title: 'Luigi Quiz 2',
      questions: [
        {
          sequence: 1,
          prompt: "In Luigi's Mansion, what is the name of the professor who equips Luigi with a Poltergust and helps him capture ghosts?",
          correctChoice: 'A',
          choices: [
            { choice: 'A', prompt: 'Professor E. Gadd'  },
            { choice: 'B', prompt: 'Dr. Mario' },
            { choice: 'C', prompt: 'Professor Toad' },
            { choice: 'D', prompt: 'Professor Koopa' },
          ],
        },
        {
          sequence: 2,
          prompt: "Luigi is known for being easily frightened. What does he typically exclaim when he's scared in the games?",
          correctChoice: "D",
          choices: [
            { choice: "A", prompt: "It's-a me, Luigi" },
            { choice: "B", prompt: "Mamma mia!" },
            { choice: "C", prompt: "Let's-a go!" },
            { choice: "D", prompt: "I-I-I-I'm-a Luigi!" },
          ],
        },
        {
          sequence: 3,
          prompt: "In the game 'Luigi's Mansion,' what is the name of Luigi's rescue target, whom he needs to save from ghosts?",
          correctChoice: 'C',
          choices: [
            { choice: 'A', prompt: 'Daisy' },
            { choice: 'B', prompt:'Rosalina' },
            { choice: 'C', prompt: 'Peach' },
            { choice: 'D', prompt: 'Mario' },
          ],
        },
        {
          sequence: 4,
          prompt: "What is the name of Luigi's haunted, ghost-filled mansion that he inherits in the game 'Luigi's Mansion'?",
          correctChoice: 'B',
          choices: [
            { choice: 'A', prompt: 'Ghostly Manor' },
            { choice: 'B', prompt: 'Haunted House' },
            { choice: "C", prompt: "Luigi's Castle" },
            { choice: 'D', prompt: 'The Last Resort' },
          ],
        },
        {
          sequence: 5,
          prompt: "In 'Super Mario Bros. 2,' Luigi is known for his unique ability. What can Luigi do that Mario and others can't?",
          correctChoice: 'D',
          choices: [
            { choice: 'A', prompt: 'Fly' },
            { choice: 'B', prompt: 'Shoot fireballs' },
            { choice: 'C', prompt: 'Run faster' },
            { choice: 'D', prompt: 'Jump higher' },
          ],
        },
      ],
    },
    {
      character: 'Mario',
      title: 'Mario Quiz 1',
      questions: [
        {
          sequence: 1,
          prompt: "Who is the primary antagonist in the Mario series and is constantly kidnapping Princess Peach?",
          correctChoice: 'D',
          choices: [
            { choice: 'A', prompt: 'Toad' },
            { choice: 'B', prompt: 'Wario' },
            { choice: 'C', prompt: 'Luigi' },
            { choice: 'D', prompt: 'Bowser' },
          ],
        },
        {
          sequence: 2,
          prompt: "What is the name of Mario's brother who often assists him on his adventures?",
          correctChoice: 'C',
          choices: [
            { choice: 'A', prompt: 'Waluigi' },
            { choice: 'B', prompt: 'Yoshi' },
            { choice: 'C', prompt: 'Luigi' },
            { choice: 'D', prompt: 'Donkey Kong' },
          ],
        },
        {
          sequence: 3,
          prompt: "In the game 'Super Mario 64,' how many Power Stars does Mario need to collect to access Princess Peach's Castle's final level?",
          correctChoice: 'C',
          choices: [
            { choice: 'A', prompt: '70' },
            { choice: 'B', prompt: '100' },
            { choice: 'C', prompt: '120' },
            { choice: 'D', prompt: '150' },
          ],
        },
        {
          sequence: 4,
          prompt: "Which iconic item gives Mario the ability to grow larger and break bricks when collected?",
          correctChoice: 'A',
          choices: [
            { choice: 'A', prompt: 'Super Mushroom' },
            { choice: 'B', prompt: 'Fire Flower' },
            { choice: 'C', prompt: '1-Up Mushroom' },
            { choice: 'D', prompt: 'Starman' },
          ],
        },
        {
          sequence: 5,
          prompt: "What is the name of Mario's faithful dinosaur companion who first appeared in 'Super Mario World'?",
          correctChoice: 'D',
          choices: [
            { choice: 'A', prompt: 'Koopa Troopa' },
            { choice: 'B', prompt: 'Goomba' },
            { choice: 'C', prompt: 'Wiggler' },
            { choice: 'D', prompt: 'Yoshi' },
          ],
        },
      ],
    },
    {
      character: 'Mario',
      title: 'Mario Quiz 2',
      questions: [
        {
          sequence: 1,
          prompt: "What is Mario's occupation in many of the games?",
          correctChoice: 'D',
          choices: [
            { choice: 'A', prompt: 'Chef' },
            { choice: 'B', prompt: 'Carpenter' },
            { choice: 'C', prompt: 'Doctor' },
            { choice: 'D', prompt: 'Plumber' },
          ],
        },
        {
          sequence: 2,
          prompt: 'In which game did Mario first appear?',
          correctChoice: 'C',
          choices: [
            { choice: 'A', prompt: 'Super Mario 64' },
            { choice: 'B', prompt: 'Super Mario Bros.' },
            { choice: 'C', prompt: 'Donkey Kong' },
            { choice: 'D', prompt: 'Super Mario World' },
          ],
        },
        {
          sequence: 3,
          prompt: "What is the name of Mario's loyal dinosaur companion?",
          correctChoice: 'D',
          choices: [
            { choice: 'A', prompt: 'Toad' },
            { choice: 'B', prompt: 'Luigi' },
            { choice: 'C', prompt: 'Princess Peach' },
            { choice: 'D', prompt: 'Yoshi' },
          ],
        },
        {
          sequence: 4,
          prompt: 'What does Mario collect to gain extra lives in most games?',
          correctChoice: 'C',
          choices: [
            { choice: 'A', prompt: 'Coins' },
            { choice: 'B', prompt: 'Stars' },
            { choice: 'C', prompt: '1-Up Mushrooms' },
            { choice: 'D', prompt: 'Power Stars' },
          ],
        },
        {
          sequence: 5,
          prompt: 'Which iconic item gives Mario the ability to shoot fireballs?',
          correctChoice: 'D',
          choices: [
            { choice: 'A', prompt: 'Super Mushroom' },
            { choice: 'B', prompt: '1-Up Mushroom' },
            { choice: 'C', prompt: 'Starman' },
            { choice: 'D', prompt: 'Fire Flower' },
          ],
        },
      ],
    },
    {
      character: 'Bowser',
      title: 'Bowser Quiz 1',
      questions: [
        {
          sequence: 1,
          prompt: "Finish the lyrics: This one is for my one and only true love...",
          correctChoice: 'A',
          choices: [
            { choice: 'A', prompt: 'Rosalina'  },
            { choice: 'B', prompt: 'Princess Peach' },
            { choice: 'C', prompt: 'Princess Daisy' },
            { choice: 'D', prompt: 'Toadette' },
          ],
        },
        {
          sequence: 2,
          prompt: "Finish the lyrics: Mario, Luigi, and Donkey Kong too a thousand troops of...",
          correctChoice: "C",
          choices: [
            { choice: 'A', prompt: "Goombas couldn't keep me from you"  },
            { choice: 'B', prompt: "Shy Guys couldn't keep me from you" },
            { choice: 'C', prompt: "Koopas couldn't keep me from you" },
            { choice: 'D', prompt: "Yoshis couldn't keep me from you" },
          ],
        },
        {
          sequence: 3,
          prompt: "In which Super Mario game does Bowser transform into different forms, such as a giant, a skeleton, and a shadow, during the final battle?",
          correctChoice: 'A',
          choices: [
            { choice: 'A', prompt: 'Super Mario 64'  },
            { choice: 'B', prompt: 'Super Mario Bros.' },
            { choice: 'C', prompt: 'Super Mario Sunshine' },
            { choice: 'D', prompt: 'Super Mario Galaxy' },
          ],
        },
        {
          sequence: 4,
          prompt: "In the Super Mario series, Bowser often uses a variety of unique items and power-ups to hinder Mario. Which item is commonly associated with Bowser's attacks?",
          correctChoice: 'D',
          choices: [
            { choice: 'A', prompt: 'Bob-omb'  },
            { choice: 'B', prompt: 'Thwomp' },
            { choice: 'C', prompt: 'Bullet Bill' },
            { choice: 'D', prompt: 'Spiny Shell (Blue Shell)' },
          ],
        },
        {
          sequence: 5,
          prompt: "Who plays bowser in the 2023 Super Mario Bros. Movie?",
          correctChoice: 'C',
          choices: [
            { choice: 'A', prompt: 'Jack Nicholson'  },
            { choice: 'B', prompt: 'Jack Dawson' },
            { choice: 'C', prompt: 'Jack Black' },
            { choice: 'D', prompt: 'Jack White' },
          ],
        },
      ],
    },
    {
      character: 'Bowser',
      title: 'Bowser Quiz 2',
      questions: [
        {
          sequence: 1,
          prompt: "What is Bowser's primary motivation in the Super Mario series, often driving the game's plot?",
          correctChoice: 'B',
          choices: [
            { choice: 'A', prompt: 'To collect coins' },
            { choice: 'B', prompt: 'To rescue Princess Peach' },
            { choice: 'C', prompt: 'To defeat Mario' },
            { choice: 'D', prompt: 'To acquire the Mushroom Kingdom' },
          ],
        },
        {
          sequence: 2,
          prompt: "What is the name of Bowser's castle in many Super Mario games, which often serves as a final level for players to conquer?",
          correctChoice: 'D',
          choices: [
            { choice: 'A', prompt: 'Mushroom Castle' },
            { choice: 'B', prompt: 'Koopa Castle' },
            { choice: 'C', prompt: "Peachs Castle" },
            { choice: 'D', prompt: "Bowser's Castle" },
          ],
        },
        {
          sequence: 3,
          prompt: "In which Super Mario game did Bowser first appear as the main antagonist and kidnapper of Princess Peach?",
          correctChoice: 'A',
          choices: [
            { choice: 'A', prompt: 'Super Mario Bros.' },
            { choice: 'B', prompt: 'Super Mario 64' },
            { choice: 'C', prompt: 'Super Mario World' },
            { choice: 'D', prompt: 'Super Mario Sunshine' },
          ],
        },
        {
          sequence: 4,
          prompt: "What species is Bowser in the Super Mario series, distinguishing him from the other characters in the games?",
          correctChoice: 'D',
          choices: [
            { choice: 'A', prompt: 'Koopa Troopa' },
            { choice: 'B', prompt: 'Goomba' },
            { choice: 'C', prompt: 'Wiggler' },
            { choice: 'D', prompt: 'Koopa King' },
          ],
        },
        {
          sequence: 5,
          prompt: "Bowser often has a group of loyal henchmen who help him carry out his plans. What are these henchmen called?",
          correctChoice: 'B',
          choices: [
            { choice: 'A', prompt: 'The Goonies' },
            { choice: 'B', prompt: 'The Koopalings' },
            { choice: 'C', prompt: 'The Toadies' },
            { choice: 'D', prompt: 'The Cheep Cheeps' },
          ],
        },
      ],
    }
  ]);

  console.log(quizzes)
  process.exit();
})();

