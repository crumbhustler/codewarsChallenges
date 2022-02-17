// Description:
// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

// Examples
// isPalindrome("anna")   ==> true
// isPalindrome("walter") ==> false
// isPalindrome(12321)    ==> true
// isPalindrome(123456)   ==> false

//mine
function isPalindrome(line) {
  let palin = line.toString()
  let reverse = palin.split('').reverse().join('')
  return reverse === palin
}

//better
function isPalindrome(line) {
  return (line.toString() == line.toString().split('').reverse().join(''));
}