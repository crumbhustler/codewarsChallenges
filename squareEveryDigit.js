// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
  //turn num to string
  let string = num.toString();
  //create array to rerturn new values of string
  let results = [];
  //iterate through string and save square of number
  for (let i = 0; i < string.length; i++){
    results[i] = string[i] * string[i];
  }
  //turn into string then number
  return Number(results.join(''))
}