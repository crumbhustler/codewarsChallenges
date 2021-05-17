// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

// Examples
// booleans = [True, True, False], operator = "AND"
// True AND True -> True
// True AND False -> False
// return False
// booleans = [True, True, False], operator = "OR"
// True OR True -> True
// True OR False -> True
// return True
// booleans = [True, True, False], operator = "XOR"
// True XOR True -> False
// False XOR False -> False
// return False
// Input
// an array of Boolean values (1 <= array_length <= 50)
// a string specifying a logical operator: "AND", "OR", "XOR"
// Output
// A Boolean value (True or False).

//my solution
//AND
// function andCalc(array) {
//   //confirm all are the same
//   if (array.every((x) => x===true) || array.every((x)=>x===false)) {
//      return array[0];
//   } else {
//     return false;
//   }
// }

// //OR
// function orCalc(array){
//   //if prev and curr are the same, return first
//   //if prev and curr are not the same, return true
//   return array.reduce((x,y,z)=>{return x===y ? x : true;});
// }

// //XOR
// function xorCalc(array) {
//   return array.reduce((x,y,z)=>x!==y);
// }

// function logicalCalc(array,op) {
//   if (op==='AND') {
//     return andCalc(array);
//   } else if (op === 'OR') {
//     return orCalc(array);
//   } else if (op === 'XOR') {
//     return xorCalc(array);
//   }
// }

//best solution
var ops = {
    AND: (a, b) => a && b,
    OR: (a, b) => a || b,
    XOR: (a, b) => a !== b,
};

function logicalCalc(array, op) {
    return array.reduce(ops[op]);
}