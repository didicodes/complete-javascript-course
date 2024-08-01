// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const dad = "23";
// console.log(dad);

// const ageCal = (birthYear) => 2024 - birthYear;

// console.log(ageCal(1994));

/* 
Given an array of forecasted maximum temperatures, the thermometer displays a string
with these temperatures. 

Example: [17, 21, 23] will print "... 17C in 1 days ... 21C in 2 days ... 23C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the
above to the console. 

Use the problem-solving framework: Understand the problem and break it up into sub-problems

Test Data 1: [17, 21, 23]
Test Data 2: [12, 5, -5, 0, 4]
*/

/* What is the problem?
// The problem is what you are trying to do
* Am I supposed to hardcord these strings - more specially the day count

*/

/* How can I fix this problem?
// The sub-problems is how you intend to solve them 
// Start by hard cording and then update 
* Create a function called printForecast - Done 
* In the function, create a for loop and get each value in the array
* Return a templated string with each value in the array inputed in each string
* Figure out if there's a way to do this without hardcoding
*/

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast = (arr) => {
//   // This is an accumulator variable
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     str += `... ${arr[i]}^C in ${i + 1} days `;
//     console.log(str);
//   }
// };

// printForecast(data1);

/* A "Rock, Paper, Scissors" game. This is a classic game that will help you practice 
conditional statements, user input, and basic logic. The game will allow a user to play 
against the computer. The computer will randomly choose rock, paper, or scissors, 
and the user will input their choice. The program will then determine the winner.*/

// What is the problem?
// A game that selects a winner based on what they choose
// Understand who wins based on the selected criteria
// Google to see if there's something that can choose random value from an array and return it

// Sub-problems for this issue
// Create a function rpcGame - Done
// Show what the computer choose from the array - Done
// An input that takes what you selected - Done
// An if/else statement that returns if you won or loss based on your selection - Done
// Include what the user and computer selected before giving the result
// If we want to repeat this then add it into a loop

// Function to get the computers choice
const getComputersChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

getComputersChoice();

// Function to get the winner
const determineWinner = (usersChoice, computersChoice) => {
  if (usersChoice === computersChoice) {
    return "It's a tie!";
  }

  if (
    (usersChoice === "rock" && computersChoice === "scissors") ||
    (usersChoice === "paper" && computersChoice === "rock") ||
    (usersChoice === "scissors" && computersChoice === "paper")
  ) {
    return `You win!`;
  }
  return `Computer wins!`;
};

// Function to play a single hand winner

const playGame = () => {
  const usersChoice = prompt(
    "Enter your choice (rock, paper, or scissors):"
  ).toLowerCase();

  // Check if input is valid
  if (!["rock", "paper", "scissors"].includes(usersChoice)) {
    console.log(`Choose a valid choice`);
    return;
  }

  const computersChoice = getComputersChoice();
  console.log(`You choose ${usersChoice}`);
  console.log(`The computer choose ${computersChoice}`);

  const result = determineWinner(usersChoice, computersChoice);
  console.log(result);
};

playGame();
