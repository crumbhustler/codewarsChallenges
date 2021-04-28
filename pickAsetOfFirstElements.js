// Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

// If n == 0 return an empty sequence []

function first(arr, n) {
    return n === undefined ? arr.slice(0, 1) : arr.slice(0, n);
}