// Description:
// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Get your timer out. Are you ready? Ready, get set, GO!!!

const arrayMadness = (a, b) => {
  return (
    a.reduce((acc, cur) => acc + cur ** 2, 0) >
    b.reduce((acc, cur) => acc + cur ** 3, 0)
  );
};

//longer way
function arrayMadness(a, b) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0, { length } = a; i < length; ++i) {
    sum1 += a[i] ** 2;
  }
  for (let i = 0, { length } = b; i < length; ++i) {
    sum2 += b[i] ** 3;
  }
  return sum1 > sum2;
}
