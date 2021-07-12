// Description:
// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// sumOfDifferences([2, 1, 10])
// Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

//my solution

const sumOfDifferences = (array) =>
    array.length <= 1 ? 0 : Math.max(...array) - Math.min(...array);

//other way
function sumOfDifferences(arr) {
    arr.sort((a, b) => a - b);
    let b = 0;
    for (let a = arr.length - 1; a > 0; a--) {
        b += arr[a] - arr[a - 1];
    }
    return b;
}