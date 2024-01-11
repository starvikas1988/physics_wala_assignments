function generateNumbers(start, end) {
    if (start > end) {
        // Swap values if start is greater than end
        [start, end] = [end, start];
    }

    // Generate numbers between start and end (inclusive)
    const numbers = [];
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }

    return numbers;
}

// Example usage:
const startNumber = 10;
const endNumber = 30;

const generatedNumbers = generateNumbers(startNumber, endNumber);
console.log('Generated Numbers:', generatedNumbers);
