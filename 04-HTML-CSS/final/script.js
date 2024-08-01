// Problem
// Build a calculator that can add, subtract, multiply, divide
// This calculator will:
// Prompt the user to choose an operation.
// Prompt the user to enter two numbers.
// Perform the chosen operation and display the result.

// Sub tasks to solve this problem
// Create a function for each operation. Test it. - Done
// Write code that instructs users about what they should do - strings, prompts
// Write if/else statements for each operation
// Return results
// Add something that confirms they only select the available operation

// // Addition function
// const add = (num1, num2) => {
//   return num1 + num2;
// };

// // Subtraction function
// const subtract = (num1, num2) => {
//   return num1 - num2;
// };

// // Multiplication function
// const multiply = (num1, num2) => {
//   return num1 * num2;
// };

// // Division function
// const divide = (num1, num2) => {
//   if (num2 === 0) {
//     return "Error - cant divide";
//   }
//   return num1 / num2;
// };

// // Function for getting the operation
// const calculator = () => {
//   const instruction = prompt(
//     "This is a simple calculator. Select which operation you want to perform - addition, subtraction, division and multiplication"
//   );

//   // Get the two numbers
//   const num1 = Number(prompt("Add the first number"));
//   const num2 = Number(prompt("Add the second number"));

//   let result;

//   if (instruction === "addition") {
//     result = add(num1, num2);
//   } else if (instruction === "subtraction") {
//     result = subtract(num1, num2);
//   } else if (instruction === "division") {
//     result = divide(num1, num2);
//   } else if (instruction === "multiplication") {
//     result = multiply(num1, num2);
//   } else {
//     console.log("Invalid operation");
//   }
//   console.log(`Result: ${result}`);
// };

// calculator();

// Random Quote Generator program

/* The Problem
build a "Random Quote Generator" that displays a random quote from a predefined
list each time it is run. This program will help you practice working with arrays,
random numbers, and functions. The program will:
Store a list of quotes.
Randomly select and display a quote from the list each time it runs.*/

// Sub problems
// Create an array with a list of quotes
// Create a function that loops through the array randomly
// Return the string (quote) from the array

// const quotes = [
//   "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
//   "The way to get started is to quit talking and begin doing. - Walt Disney",
//   "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
//   "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
//   "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. - Oprah Winfrey",
//   "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
//   "Life is what happens when you're busy making other plans. - John Lennon",
// ];

// const randomQuoteGenerator = (arr) => {
//   const randomNumber = Math.floor(Math.random() * quotes.length);
//   return arr[randomNumber];
// };

// console.log(randomQuoteGenerator(quotes));
// console.log(randomQuoteGenerator(quoteList));

// Create a TODOList application

// Have a clear picture of the problem
/* Create a "To-Do List" program that allows users to add, remove & display
tasks. This will help me practice working with arrays,loops & user input.*/

// Sub problems
/* 1. Allow the user to add tasks. 
a) Create a function that accepts input - done 
b) These inputs should be stored somewhere - an array in this case 
c) Display the results in the TODOlist in the console
*/
//
// Allow the user to remove tasks.
// Display all tasks.
// I'm not sure I understand how looping will work here and that's okay.
// I'll look at the code to understand it and then try to implement it myself

/* ------ Code for the TODOList application ----- */

// Array to store tasks
let tasks = ["hey"];

// Function to add task
const addTask = (task) => {
  tasks.push(task);
  console.log(`Task "${task}" added.`);
};

// Function to remove tasks
const removeTask = (task) => {
  // You want to check if there's anything in the array
  // If there is, remove the one at the end.
  // If there isn't, tell the user there's nothing.
  const index = tasks.indexOf(task);
  if (index > -1) {
    tasks.splice(index, 1);
    console.log(`Task "${task}" has been removed`);
  } else {
    console.log(`Task "${task}" doesn't exist`);
  }
};

// Function to display tasks

const displayTasks = () => {
  // You want to check if there's even something in the array
  // If there is, display the content of the array
  // If there isn't, let the user know there's nothing
  if (tasks.length === 0) {
    console.log(`No task in the Todo List`);
  } else {
    console.log(`TO-DO List:`);
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
};

// The To-Do List function
const toDoList = () => {
  let running = true;
  while (running) {
    const action = prompt(
      "Choose an action: add, remove, display or quit"
    ).toLowerCase();

    switch (action) {
      case "add":
        const taskToAdd = prompt("Enter a task to add");
        addTask(taskToAdd);
        break;
      case "remove":
        const taskToRemove = prompt("Enter the task to remove");
        removeTask(taskToRemove);
        break;
      case "display":
        displayTasks();
        break;
      case "quit":
        running = false;
        console.log("Existing the To-Do list program now");
        break;
      default:
        console.log(
          "Invalid action. Please choose add, remove, display, or quit."
        );
    }
  }
};

// Call the toDolist
toDoList();
