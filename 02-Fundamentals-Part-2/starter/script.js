'use strict';

// function logger(name) {
//     console.log(`My name is ${name}`)
// }

// logger("jonas")

// function juicer(apples, oranges) {
//     console.log(apples, oranges)
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     // The return keyword is used to return any value from the function
//     // This means, juice will become the result of executing this fucntion
//     return juice;
// }

// // If we want to use that value that was returned from a function, we need to store it
// // in a variable
// const applejusice = juicer(1, 2)
// // The reason why I could see 1 and 2 in the result is becuase there was already a console.log
// // in the function. So after adding this function to a variable in order to see the returned
// // value, you also need to console.log it. 
// console.log(applejusice)

// // So the whole stuff was on the console.log thingy oh. 


// // Write a function to calculate an age based on the given year 

// const currentYear = 2024;

// function usersAge(birthYear) {
//     const calculateAge = currentYear - birthYear;
//     return calculateAge
// }

// const age = usersAge(1998);
// console.log(`You are ${age} years old`);


// // Arrow functions
// const yearsUntilRetirement = (birthYear) => {
//     const age = currentYear - birthYear;
//     const retirementYears = 64 - age;
//     return retirementYears;
// }

// console.log(`You have ${yearsUntilRetirement(1998)} years until you retire`);

// function cutFruitPieces(fruit) {
//     return fruit * 4
// }

// function foodProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples)
//     const orangePieces = cutFruitPieces(oranges)

/*    const juice = `This juice was made with ${applePieces} apples and ${orangePieces} oranges`;
This console.log code doesnt impact the function or what is being returned. It is only used to
log a message to the console so you can see what you are doing and confirm that it is working
That way, you can make changes accordingly. What you need to have is the return keyword.  */
// console.log(juice)
//     return juice;
// }

// console.log(foodProcessor(2, 3))

// Arrays

// // Add elements
// const friends = ["Edidiong", "Anny", "Asikpo"];
// friends.push("Didi");
// friends.unshift("Hey");
// console.log(friends);

// // Remove elements

// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

// // Tells you the position of the array - The index 
// console.log(friends.indexOf("Anny"));

// // Returns true if the element is in the array and false if the element is not
// console.log(friends.includes("Anny"));

// Understanding Objects and how they work
// const javaObject = {
//     "firstname": "Edidiong",
//     "lastname": "Asikpo",
//     come: ["hey", "farm"]
// }
// const nameKey = "name"

// console.log(javaObject["first" + nameKey]);
// console.log(javaObject["last" + nameKey]);



// Understanding loops and how they work 
// for (let rep = 1; rep <= 10; rep++) {
//     // The first or initial counter will run first before the updater starts working
//     console.log(`The number of words ${rep}`);
// }

const jonasArray = [
    "jonas",
    "Asikpo",
    2024 - 1998,
    "backend developer",
    ["A", "badass", "software", "developer"]
]

// // continue means continue if what I want doesnt exists 
// // The continue exists the current iteration of the loop and moves to the next one 
// for (let i = 0; i <= jonasArray.length; i++) {
//     if (typeof (jonasArray[i]) !== "string") continue;
//     console.log(jonasArray[i], typeof (jonasArray[i]))
// }

// // Break means end the entire loop immediately. So here when it sees a number it ends the loop
// for (let i = 0; i <= jonasArray.length; i++) {
//     if (typeof (jonasArray[i]) === "number") break;
//     console.log(jonasArray[i], typeof (jonasArray[i]))
// }

// for (let exercise = 1; exercise <= 4; exercise++) {
//     console.log(`----- Starting exercise 🥳 ${exercise}`)

//     for (let weight = 1; weight <= 4; weight++) {
//         console.log(`Exercise ${exercise}: Lifting weight ${weight} times`)
//     }
// }

// Looping backwards
// for (let i = jonasArray.length - 1; i >= 0; i--) {
//     console.log(i, jonasArray[i]);
// }


// While Loop 
// let rep = 0;
// while (rep <= 4) {
//     console.log(`----- A star  ${rep} 🥳`)
//     rep++
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1
//     if (dice === 6) console.log("Loop is about to end...")
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };


// for (let billsValue = 0; billsValue < bills.length; billsValue++) {
//     let tip = calcTip(bills[billsValue]);
//     tips.push(tip);
//     totals.push(bills[billsValue] + tip);
// }

// console.log(bills);
// console.log(tips);
// console.log(totals);

// // Formular is sum of values/number of values
// // I need to know the sum of values 
// // I need to know the number of values
// // Perform a calculation that fins the average

// function calcAverage(arr) {
//     let sum = 0;
//     let average;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         average = sum / arr.length
//     }
//     return average;
// }

// console.log(calcAverage(totals));

// Create a number guessing game
// This program will generate a random number between 1 and 100, and the player will try to 
// guess the number. The program will give feedback on whether the
// guess is too high, too low, or correct.

// const randomNumber = Math.floor(Math.random() * 100) + 1;
// let attempts = 0;
// let guess = 0;

// console.log("Welcome to the Number Guessing Game!");
// console.log("Guess a number between 1 and 100");

// while (guess !== randomNumber) {

//     guess = parseInt(prompt("Enter your guess: "), 10);
//     attempts += 1;

//     if (isNaN(guess)) {
//         console.log("Please enter a valid number")
//     } else if (guess > randomNumber) {
//         console.log("Too high! Try again.")
//     } else if (guess < randomNumber) {
//         console.log("Too low! Try again.")
//     } else {
//         console.log("Congratulations. You've gotten the correct number")
//     }
// }

const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);