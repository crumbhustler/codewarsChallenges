// Description:
// Create a method all which takes an array and a predicate (function pointer), and returns true if the predicate returns true for every element in the array. Otherwise, it should return false. If the array is empty, it should return true, since technically nothing failed the test.

//my answer
function all(arr, fun) {
  if (arr.every(fun)) {
    return true;
  } else return false;
}

//shorter answer
function all(arr, fun) {
  return arr.every(fun);
}
