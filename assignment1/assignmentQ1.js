// Q1 Write a program that grades students based on their marks
//  If greater than 90 then A Grade
//  If between 70 and 90 then a B grade
//  If between  50 and 70 then a C grade
//  Below 50 then an F grade

function gradeStudents(marks) {
    if (marks > 90) {
        return 'A Grade';
    } else if (marks >= 70 && marks <= 90) {
        return 'B Grade';
    } else if (marks >= 50 && marks < 70) {
        return 'C Grade';
    } else {
        return 'F Grade';
    }
}

// Example usage:
var studentMarks = 90;
var result = gradeStudents(studentMarks);

console.log('The student gets ' + result);
