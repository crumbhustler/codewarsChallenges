// Description:
// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

// examples:

// uniTotal("a") == 97 uniTotal("aaa") == 291

//my found one
function uniTotal(s) {
  let newS = [];
  let finalS;
  for (let i = 0; i < s.length; i++) {
    newS.push(s.charCodeAt(i));
    //console.log("newS:", newS);
  }
  if (s === "") return 0;
  if (s.length === 1) return s.charCodeAt(0);
  if (newS.length > 1) {
    finalS = newS.reduce((a, b) => a + b);
  }
  return finalS;
}

//best solution
const uniTotal = (str) =>
  [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);
