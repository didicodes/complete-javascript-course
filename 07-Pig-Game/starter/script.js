'use strict';

// // Selecting elements
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// let scores, currentScore, activePlayer, playing;

// // Starting conditions
// const init = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;

//   diceEl.classList.add('hidden');
//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// };
// init();

// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// // Rolling dice functionality
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     // 1. Generating a random dice roll
//     const dice = Math.trunc(Math.random() * 6) + 1;

//     // 2. Display dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     // 3. Check for rolled 1
//     if (dice !== 1) {
//       // Add dice to current score
//       currentScore += dice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       // Switch to next player
//       switchPlayer();
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     // 1. Add current score to active player's score
//     scores[activePlayer] += currentScore;
//     // scores[1] = scores[1] + currentScore

//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     // 2. Check if player's score is >= 100
//     if (scores[activePlayer] >= 20) {
//       // Finish the game
//       playing = false;
//       diceEl.classList.add('hidden');

//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');
//     } else {
//       // Switch to the next player
//       switchPlayer();
//     }
//   }
// });

// btnNew.addEventListener('click', init);

/* Build a "Number Guessing Game". This game will allow a user to guess 
a number between 1 and 100, and the program will give feedback whether the 
guess is too high, too low, or correct. This will help you practice working 
with loops, conditionals, and user input.*/

// Number Guessing Game
// 1. There should be a variable that generates random numbers
// 2. User should be able to input something
// 3. What the user has inputted should be compared with random number
// 3a. Check if number is too high
// 3b. Check if number is too low
// 3a. Check if number is correct

// function generateRandomNumber() {
//   return Math.floor(Math.random() * 100) + 1;
// }

// function numberGuessingGame() {
//   const randomNumber = generateRandomNumber();
//   let guess = null;

//   console.log('Welcome to the Number Guessing Game!');
//   console.log('I have selected a random number between 1 and 100.');

//   while (guess !== randomNumber) {
//     // guess = Number(prompt('Enter a random number between 1 to 100'));

//     if (guess > randomNumber) {
//       console.log('Number is too high');
//     } else if (guess < randomNumber) {
//       console.log('Number is too low');
//     } else if (guess === randomNumber) {
//       console.log('Yay! You guessed the right number');
//     } else {
//       console.log('Invalid input. Please enter a number between 1 and 100.');
//     }
//   }
// }

// numberGuessingGame();

/*
Build a Simple Quiz program that ask the user a series of questions, 
keep track of the user's score & display the final score at the end.
*/

// An array of objects with questions and answers
// const quiz = [
//   {
//     question: 'how old are you?',
//     answer: '25',
//   },
//   {
//     question: 'what is your name?',
//     answer: 'Edidiong',
//   },
//   {
//     question: 'who do you trust?',
//     answer: 'God',
//   },
// ];

// // Function to run the quiz
// const runQuiz = () => {
//   let score = 0;
//   for (let i = 0; i < quiz.length; i++) {
//     const usersAnswer = prompt(quiz[i].question);

//     if (usersAnswer == quiz[i].answer) {
//       console.log('You got the correct answer');
//       score++;
//     } else {
//       console.log(`Wrong! The correct answer is ${quiz[i].answer}`);
//     }
//   }

//   console.log(`Your score is ${score} out of ${quiz.length}`);
// };

// runQuiz();

/* Build a Password Generator. This program will generate a random password 
based on user-specified criteria such as length, inclusion of uppercase letters, 
numbers, and special characters. This will help you practice working with 
strings, arrays, loops, conditionals, and user input in JavaScript. */

// Sub tasks
//
