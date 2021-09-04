// Description:
// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

// For example (Input --> Output)

// "Yes" --> "Yes?"
// "No?" --> "No?"

//my solution
function ensureQuestion(s) {
  if (s.includes("?")) {
    return s;
  } else {
    return s + "?";
  }
}

//short solution
const ensureQuestion = (s) => (s.endsWith("?") ? s : s + "?");
