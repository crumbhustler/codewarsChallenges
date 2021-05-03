// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// function fakeBin(x){
//     return x.split('').map(a => a < '5' ? "0" : "1").join("");
//   }

function fakeBin(x) {
    let a = ''
    for (i = 0; i < x.length; i++) {
        if (x[i] < '5') a += '0';
        else if (x[i] >= '5') a += '1';
    }
    return a;
}