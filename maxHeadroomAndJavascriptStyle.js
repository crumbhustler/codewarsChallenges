// Description:
// Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value? Can you spot a problem and fix it? Can you learn something about JavaScript style in this kata?

//my solution
function getMax1() {
  let max = { name: "Max Headroom" };
  return max;
}

function getMax2() {
  let max = { name: "Max Headroom" };
  return max;
}

//best solution

const getMax1 = () => ({ name: "Max Headroom" });
const getMax2 = () => ({ name: "Max Headroom" });
