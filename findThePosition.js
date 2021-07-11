// Description:
// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

//my solution
function position(letter) {
    let place = letter
        .toLowerCase()
        .split("")
        .filter((x) => (x >= "a") & (x <= "z"))
        .map((x) => x.charCodeAt(0) - "a".charCodeAt(0) + 1)
        .join(" ");
    return "Position of alphabet: " + place;
}

//best solution
function position(letter) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return "Position of alphabet: " + (alphabet.indexOf(letter) + 1);
}