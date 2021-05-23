// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end.

//my way
function multiTable(number) {
    let result = "";
    let product;
    for (let i = 1; i < 11; i++) {
        if (i === 10) {
            product = i * number;
            result += i + " * " + number + " = " + product;
        } else {
            product = i * number;
            result += i + " * " + number + " = " + product + "\n";
        }
    }
    return result;
}

//fancy way
function multiTable(n) {
    return [...Array(10)]
        .map((_, i) => `${i + 1} * ${n} = ${n * i + n}`)
        .join("\n");
}