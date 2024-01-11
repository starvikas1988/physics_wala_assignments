// Q8.You are creating a program to calculate the sum of numbers. Write a JavaScript program that takes a
// positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the
// given integer.

function calculateSum(upToNumber) {
    let sum = 0;
    let currentNumber = 1;

    do {
        sum += currentNumber;
        currentNumber++;
    } while (currentNumber <= upToNumber);

    console.log(`The sum of numbers from 1 to ${upToNumber} is: ${sum}`);
}

const enteredNumber = 10

if (enteredNumber > 0) {
    calculateSum(enteredNumber);
} else {
    console.log("Invalid input. Please enter a positive integer.");
}
