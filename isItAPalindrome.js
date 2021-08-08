// Description:
// Write function that checks if a given string (case insensitive) is a palindrome.

//best practice
const isPalindrome = (x) =>
  x.toLowerCase() === x.toLowerCase().split("").reverse().join("");

//my answer
function isPalindrome(x) {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase()
    ? true
    : false;
}
