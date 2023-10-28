require('dotenv').config();
require('./config/database');

const Quiz = require('./models/quiz');
const Result = require('./models/result');

(async function () {
  await Quiz.deleteMany({});
  await Result.deleteMany({});
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
    },
    {
      character: 'Peach',
      title: 'Peach Quiz 1',
      questions: [
        {
          sequence: 1,
          prompt: "What is Princess Peach's full name in the Super Mario series?",
          correctChoice: 'A',
          choices: [
            { choice: 'A', prompt: 'Peach Toadstool' },
            { choice: 'B', prompt: 'Peach Mushroom' },
            { choice: 'C', prompt: 'Peach Mario' },
            { choice: 'D', prompt: 'Peach Koopa' },
          ],
        },
        {
          sequence: 2,
          prompt: "Which kingdom does Princess Peach rule over?",
          correctChoice: 'C',
          choices: [
            { choice: 'A', prompt: 'Star Kingdom' },
            { choice: 'B', prompt: "Flower Kingdom" },
            { choice: 'C', prompt: 'Mushroom Kingdom' },
            { choice: 'D', prompt: "Toad Kingdom" },
          ],
        },
        {
          sequence: 3,
          prompt: "Princess Peach is often kidnapped by who?",
          correctChoice: 'A',
          choices: [
            { choice: 'A', prompt: 'Bowser' },
            { choice: 'B', prompt: 'Wario' },
            { choice: 'C', prompt: 'Donkey Kong' },
            { choice: 'D', prompt: 'Luigi' },
          ],
        },
        {
          sequence: 4,
          prompt: "What is the name of Princess Peach's loyal Toadstool assistant and protector?",
          correctChoice: 'B',
          choices: [
            { choice: 'A', prompt: 'Toadele' },
            { choice: 'B', prompt: 'Toadsworth' },
            { choice: 'C', prompt: 'Tod' },
            { choice: 'D', prompt: 'Mario' },
          ],
        },
        {
          sequence: 5,
          prompt: "In Super Mario 64, Princess Peach sends Mario on a quest to collect which iconic items?",
          correctChoice: 'A',
          choices: [
            { choice: 'A', prompt: 'Power Stars' },
            { choice: 'B', prompt: 'Coins' },
            { choice: 'C', prompt: 'Mushrooms' },
            { choice: 'D', prompt: '1-Up Mushrooms' },
          ],
        },
      ],
    },
		{
      character: 'Peach',
      title: 'Peach Quiz 2',
      questions: [
        {
          sequence: 1,
          prompt: "What is the name of Princess Peach's trusted parasol that she uses for protection in some games?",
          correctChoice: 'D',
          choices: [
            { choice: 'A', prompt: 'Peachy Parasol' },
            { choice: 'B', prompt: 'Royal Umbrella' },
            { choice: 'C', prompt: 'Toadstool Shield' },
            { choice: 'D', prompt: 'Perry the Parasol' },
          ],
        },
        {
          sequence: 2,
          prompt: "In the Super Mario Kart series, what color is Princess Peach's standard kart?",
          correctChoice: 'A',
          choices: [
            { choice: 'A', prompt: 'Pink' },
            { choice: 'B', prompt: 'Blue' },
            { choice: 'C', prompt: "Red" },
            { choice: 'D', prompt: "Yellow" },
          ],
        },
        {
          sequence: 3,
          prompt: "Princess Peach made her debut appearance in the Super Mario series in which game?",
          correctChoice: 'B',
          choices: [
            { choice: 'A', prompt: 'Super Mario 64' }, 
						{ choice: 'B', prompt: 'Super Mario Bros.' },
            { choice: 'C', prompt: 'Super Mario World' },
            { choice: 'D', prompt: 'Super Mario Sunshine' },
          ],
        },
        {
          sequence: 4,
          prompt: "In the game Super Mario RPG: Legend of the Seven Stars, Princess Peach is known for her skills in which activity?",
          correctChoice: 'C',
          choices: [
            { choice: 'A', prompt: 'Baking' },
            { choice: 'B', prompt: 'Racing' },
            { choice: 'C', prompt: 'Gardening' },
            { choice: 'D', prompt: 'Singing' },
          ],
        },
        {
          sequence: 5,
          prompt: "What is Princess Peach's special ability or power in the Super Mario series?",
          correctChoice: 'D',
          choices: [
            { choice: 'A', prompt: 'Levitation' },
            { choice: 'B', prompt: 'Invisibility' },
            { choice: 'C', prompt: 'Super strength' },
            { choice: 'D', prompt: 'Emotion-based abilities' },
          ],
        },
      ],
    },
    {
      character: 'Waluigi',
      title: 'Waluigi Quiz 1',
      questions: [
        {
          sequence: 1,
          prompt: "What is Waluigi's primary color?",
          correctChoice: 'D',
          choices: [
						{ choice: 'A', prompt: 'Green' },
            { choice: 'B', prompt: 'Blue' },
            { choice: 'C', prompt: 'Yellow' },
            { choice: 'D', prompt: 'Purple' },
          ],
        },
        {
          sequence: 2,
          prompt: "Waluigi is known for his rivalry with which character?",
          correctChoice: 'C',
          choices: [
            { choice: 'A', prompt: 'Mario' },
            { choice: 'B', prompt: 'Yoshi' },
            { choice: 'C', prompt: 'Luigi' },
            { choice: 'D', prompt: 'Bowser' },
          ],
        },
        {
          sequence: 3,
          prompt: "What is Waluigi's primary occupation in the Super Mario series?",
          correctChoice: 'B',
          choices: [
            { choice: 'A', prompt: 'Plumber' },
            { choice: 'B', prompt: 'Mischief Maker' },
            { choice: 'C', prompt: 'Hero' },
            { choice: 'D', prompt: 'Villain' },
          ],
        },
        {
          sequence: 4,
          prompt: "Which Super Mario spin-off game series commonly features Waluigi as a playable character?",
          correctChoice: 'A',
          choices: [
            { choice: 'A', prompt: 'Mario Kart' },
            { choice: 'B', prompt: 'Super Mario Bros.' },
            { choice: 'C', prompt: 'Super Smash Bros.' },
            { choice: 'D', prompt: 'Mario Party' },
          ],
        },
        {
          sequence: 5,
          prompt: "Waluigi is often seen wearing a hat with a symbol on it. What is the symbol?",
          correctChoice: 'D',
          choices: [
            { choice: 'A', prompt: 'Star' },
            { choice: 'B', prompt: 'W' },
            { choice: 'C', prompt: 'Question Mark' },
            { choice: 'D', prompt: 'Upside-Down L' },
          ],
        },
      ],
    },
		{
      character: 'Waluigi',
      title: 'Waluigi Quiz 2',
      questions: [
        {
          sequence: 1,
          prompt: "In the Mario Tennis series, what type of shot is Waluigi known for using?",
          correctChoice: 'C',
          choices: [
            { choice: 'A', prompt: 'Slice Shot' },
            { choice: 'B', prompt: 'Power Shot' },
            { choice: 'C', prompt: 'Destruction Shot' },
            { choice: 'D', prompt: 'Spin Shot' },
          ],
        },
        {
          sequence: 2,
          prompt: "Which Mario sports game is Waluigi known for competing in alongside other characters?",
          correctChoice: 'B',
          choices: [
            { choice: 'A', prompt: 'Mario Tennis' },
            { choice: 'B', prompt: 'Mario Strikers' },
            { choice: 'C', prompt: 'Mario Golf' },
            { choice: 'D', prompt: 'Mario Baseball' },
          ],
        },
        {
          sequence: 3,
          prompt: "In the Super Mario series, which event or activity is Waluigi most passionate about?",
          correctChoice: 'A',
          choices: [
            { choice: 'A', prompt: 'Dancing' },
            { choice: 'B', prompt: 'Cooking' },
            { choice: 'C', prompt: 'Painting' },
            { choice: 'D', prompt: 'Gardening' },          
					],
        },
        {
          sequence: 4,
          prompt: "What is Waluigi's relationship to Wario in the Super Mario series?",
          correctChoice: 'B',
          choices: [
						{ choice: 'A', prompt: 'Brother' },
            { choice: 'B', prompt: 'Rival' },
            { choice: 'C', prompt: 'Friend' },
            { choice: 'D', prompt: 'Ally' },
          ],
        },
        {
          sequence: 5,
          prompt: "Which Super Mario game features a mini-game called 'Waluigi's Island'?",
          correctChoice: 'C',
          choices: [
						{ choice: 'A', prompt: 'Mario Party 1' },
            { choice: 'B', prompt: 'Mario Party 2' },
            { choice: 'C', prompt: 'Mario Party 3' },
            { choice: 'D', prompt: 'Mario Party 4' },
          ],
        },
      ],
    },
    {
      character: 'Wario',
      title: 'Wario Quiz 1',
      questions: [
        {
          sequence: 1,
          prompt: "What is Wario's primary color?",
          correctChoice: 'D',
          choices: [
            { choice: 'A', prompt: 'Purple' },
            { choice: 'B', prompt: 'Red' },
            { choice: 'C', prompt: 'Green' },
            { choice: 'D', prompt: 'Yellow' },
          ],
        },
        {
          sequence: 2,
          prompt: "Wario is known for his insatiable love for which item or substance in the Super Mario series?",
          correctChoice: 'A',
          choices: [
            { choice: 'A', prompt: 'Garlic' },
            { choice: 'B', prompt: 'Coins' },
            { choice: 'C', prompt: 'Mushrooms' },
            { choice: 'D', prompt: 'Star Power' },
          ],
        },
        {
          sequence: 3,
          prompt: "What is the name of Wario's own gaming company in the Super Mario series?",
          correctChoice: 'B',
          choices: [
            { choice: 'A', prompt: 'Wario Games Co.' },
            { choice: 'B', prompt: 'WarioWare, Inc.' },
            { choice: 'C', prompt: "Wario's World" },
            { choice: 'D', prompt: 'Wario Productions' },
          ],
        },
        {
          sequence: 4,
          prompt: "Wario's first appearance in a Super Mario game was in which title?",
          correctChoice: 'D',
          choices: [
            { choice: 'A', prompt: 'Super Mario Bros.' },
            { choice: 'B', prompt: 'Super Mario World' },
            { choice: 'C', prompt: 'Super Mario Land' },
            { choice: 'D', prompt: 'Super Mario Land 2: 6 Golden Coins' },
          ],
        },
        {
          sequence: 5,
          prompt: "What is the name of Wario's rival in the Wario Land game series?",
          correctChoice: 'A',
          choices: [
            { choice: 'A', prompt: 'Captain Syrup' },
            { choice: 'B', prompt: 'Koopa' },
            { choice: 'C', prompt: 'Luigi' },
            { choice: 'D', prompt: 'Bowser' },
          ],
        },
      ],
    },
		{
      character: 'Wario',
      title: 'Wario Quiz 2',
      questions: [
        {
          sequence: 1,
          prompt: "Wario is known for his unique abilities. Which of the following is one of his signature moves?",
          correctChoice: 'C',
          choices: [
            { choice: 'A', prompt: 'Triple Jump' },
            { choice: 'B', prompt: 'Super Jump Punch' },
            { choice: 'C', prompt: 'Shoulder Bash' },
            { choice: 'D', prompt: 'Ground Pound' },
          ],
        },
        {
          sequence: 2,
          prompt: "In the game 'Wario Land: Super Mario Land 3,' Wario sets off on a quest to find a legendary treasure. What is the name of this treasure?",
          correctChoice: 'D',
          choices: [
            { choice: 'A', prompt: 'Superstar' },
            { choice: 'B', prompt: 'Mushroom Kingdom Crown' },
            { choice: 'C', prompt: 'Crystal Star' },
            { choice: 'D', prompt: 'Golden Pyramid' },
          ],
        },
        {
          sequence: 3,
          prompt: "Wario has a distinct laugh that is often heard in the games. What is his characteristic laugh?",
          correctChoice: 'C',
          choices: [
						{ choice: 'A', prompt: 'Ha-ha-ha!' },
            { choice: 'B', prompt: 'Hee-hee-hee!' },
            { choice: 'C', prompt: 'Wah-ha-ha!' },
            { choice: 'D', prompt: 'Ho-ho-ho!' },      
					],
        },
        {
          sequence: 4,
          prompt: "In the game 'WarioWare, Inc.: Mega Microgames!,' Wario starts his own game development company. What is the name of this company?",
          correctChoice: 'A',
          choices: [
            { choice: 'A', prompt: 'WarioWare, Inc.' },
            { choice: 'B', prompt: "Wario's Creations" },
            { choice: 'C', prompt: 'Mega Microgame$ Studios' },
            { choice: 'D', prompt: 'Diamond City Games' },
          ],
        },
        {
          sequence: 5,
          prompt: "In 'Wario: Master of Disguise,' Wario is on a quest to steal a legendary artifact. What is the name of this artifact?",
          correctChoice: 'D',
          choices: [
            { choice: 'A', prompt: 'Infinite Mushroom' },
            { choice: 'B', prompt: 'Eternal Star' },
            { choice: 'C', prompt: 'Unlimited Power Gem' },
            { choice: 'D', prompt: 'Bottomless Coin Sack' },
          ],
        },
      ],
    },
    {
      character: 'Bowser Jr.',
      title: 'Bowser Jr. Quiz 1',
      questions: [
        {
          sequence: 1,
          prompt: "What is the primary color of Bowser Jr.'s shell?",
          correctChoice: 'D',
          choices: [
            { choice: 'A', prompt: 'Red' },
            { choice: 'B', prompt: 'Blue' },
            { choice: 'C', prompt: 'Yellow' },
            { choice: 'D', prompt: 'Green' },
          ],
        },
        {
          sequence: 2,
          prompt: "Who is Bowser Jr.'s father in the Super Mario series?",
          correctChoice: 'A',
          choices: [
            { choice: 'A', prompt: 'Bowser' },
            { choice: 'B', prompt: 'Mario' },
            { choice: 'C', prompt: 'Luigi' },
            { choice: 'D', prompt: 'Yoshi' },
          ],
        },
        {
          sequence: 3,
          prompt: "Bowser Jr. is often accompanied by a small clown-shaped airship. What is the name of this airship?",
          correctChoice: 'B',
          choices: [
            { choice: 'A', prompt: 'Koopa Cruiser' },
            { choice: 'B', prompt: 'Koopa Clown Car' },
            { choice: 'C', prompt: 'Airship Jr.' },
            { choice: 'D', prompt: "Bowser's Buggy" },
          ],
        },
        {
          sequence: 4,
          prompt: "What is Bowser Jr.'s primary goal in most Super Mario games?",
          correctChoice: 'A',
          choices: [
            { choice: 'C', prompt: 'Collect Coins' },
            { choice: 'B', prompt: 'Defeat Mario' },
            { choice: 'C', prompt: 'Rescue Peach' },
            { choice: 'D', prompt: 'Steal Power Stars' },
          ],
        },
        {
          sequence: 5,
          prompt: "What is the nickname often used to refer to Bowser Jr. in the Super Mario series?",
          correctChoice: 'B',
          choices: [
            { choice: 'A', prompt: 'B.J.' },
            { choice: 'B', prompt: 'Junior' },
            { choice: 'C', prompt: "Lil' Bowser" },
            { choice: 'D', prompt: 'Koopa Kid' },
          ],
        },
      ],
    },
		{
      character: 'Bowser Jr.',
      title: 'Bowser Jr. Quiz 2',
      questions: [
        {
          sequence: 1,
          prompt: "In 'Super Mario Sunshine,' Bowser Jr. disguises himself as which character to deceive Mario?",
          correctChoice: 'C',
          choices: [
            { choice: 'A', prompt: 'Luigi' },
            { choice: 'B', prompt: 'Wario' },
            { choice: 'C', prompt: 'Shadow Mario' },
            { choice: 'D', prompt: 'Yoshi' },
          ],
        },
        {
          sequence: 2,
          prompt: "In 'Super Mario Galaxy,' Bowser Jr. aids his father in capturing power stars. What is his role in this game?",
          correctChoice: 'C',
          choices: [
            { choice: 'A', prompt: 'Mastermind behind the plan' },
            { choice: 'B', prompt: 'Minion collecting power stars' },
            { choice: 'C', prompt: 'Pilot of the Jr. Clown Car' },
            { choice: 'D', prompt: 'Innocent bystander' },          
					],
        },
        {
          sequence: 3,
          prompt: "What is the name of Bowser Jr.'s special paintbrush in 'Super Mario Sunshine'?",
          correctChoice: 'D',
          choices: [
            { choice: 'A', prompt: 'The Bob Ross Paintbrush' },
            { choice: 'B', prompt: 'The Picasso Paintbrush' },
            { choice: 'C', prompt: 'The Bowser Jr. Paintbrush' },
            { choice: 'D', prompt: 'The Magic Paintbrush' },      
					],
        },
        {
          sequence: 4,
          prompt: "In 'New Super Mario Bros.,' Bowser Jr. transforms into different forms during boss battles. What is his most common transformation?",
          correctChoice: 'B',
          choices: [
            { choice: 'A', prompt: 'Giant Goomba' },
            { choice: 'B', prompt: 'Koopa Clown Car' },
            { choice: 'C', prompt: 'Bullet Bill' },
            { choice: 'D', prompt: 'Boo' },
          ],
        },
        {
          sequence: 5,
          prompt: "Bowser Jr. has a signature laugh in the games. What does he often say when he laughs?",
          correctChoice: 'C',
          choices: [
            { choice: 'Ha ha ha!', prompt: 'Ha ha ha!' },
            { choice: 'Ho ho ho!', prompt: 'Ho ho ho!' },
            { choice: 'Hee hee hee!', prompt: 'Hee hee hee!' },
            { choice: 'Ha hee ho!', prompt: 'Ha hee ho!' },
          ],
        },
      ],
    }
  ]);
  
  console.log(quizzes)
  process.exit();
})();

