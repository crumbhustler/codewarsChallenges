// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade(s1, s2, s3) {
    let i = Math.floor((s1 + s2 + s3) / getGrade.length);
    if (i >= 90 && i <= 100) {
        return "A";
    } else if (i >= 80 && i <= 89) {
        return "B";
    } else if (i >= 70 && i <= 79) {
        return "C";
    } else if (i >= 60 && i <= 69) {
        return "D";
    } else {
        return "F";
    }
}