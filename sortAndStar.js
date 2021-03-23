function twoSort(s) {
    //Write a function that:
    //sort a list alphabetically
    return s.sort()
        //return the first value as a string with three asterisks in between each letter
        .slice(0, 1)
        //split the string into an array
        [0]
        .split("")
        .reduce((x, y, z) => x + "***" + y);
    //use reduce to initialize an empty string and add 3 stars after each letter unless letter is last one
}