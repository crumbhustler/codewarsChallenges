// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a) {
    //Task: write a function that
    var result = [];
    //checks a list of numbers to see if any element can be converted to lowercase vowel using unicode
    for (var i = 0; i < a.length; i++) {
        //if so, change element to string value of letter
        if (a[i] === 97 || a[i] === 101 || a[i] === 105 || a[i] === 111 || a[i] === 117) {
            result.push(String.fromCharCode(a[i]));
            //else, leave as is
        } else {
            result.push(a[i]);
        }
    }
    //return result
    return result;
}