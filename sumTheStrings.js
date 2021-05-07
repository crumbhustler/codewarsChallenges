// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// Notes:

// If either input is an empty string, consider it as zero.

// //best practice
// function sumStr(a,b) {
//     return String(Number(a)+Number(b));
//   }


//mine
function sumStr(a, b) {
    //turn string into number
    let one = Number(a)
    let two = Number(b)
        //get result of numbers
    let sum = one + two
        //turn back into string
    return sum.toString()
}