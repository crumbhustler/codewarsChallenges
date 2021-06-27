// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]]

// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

//my solution
const toCsvText = (array) => {
    let str1 = "";
    for (let i = 0; i < array.length; i++) {
        str1 += array[i].join();
        if (array[i + 1] !== undefined) {
            str1 += "\n";
        }
    }
    return str1;
};

//best solution
function toCsvText(array) {
    return array.join("\n");
}