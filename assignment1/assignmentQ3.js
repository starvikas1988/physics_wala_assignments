// Q3. Use a nested ternary operator to check that a number is positive,
// negative or zero. You have to print “positive” if the number is positive and
//  similarly for negative and zero also

const number = 0;

const result = number > 0 ? 'positive' : (number < 0 ? 'negative' : 'zero');

console.log(`The number is ${result}.`);
