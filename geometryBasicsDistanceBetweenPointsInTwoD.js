// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x and y attributes (X and Y in C#) attributes.

// Write a function calculating distance between Point a and Point b.

// Tests round answers to 6 decimal places.

const distanceBetweenPoints = ({ x: x1, y: y1 }, { x: x2, y: y2 }) =>
    Math.hypot(x1 - x2, y1 - y2);

function distanceBetweenPoints(a, b) {
    var a1 = [],
        a2 = [];
    for (var i in a) a1.push(a[i]);
    for (var i in b) a2.push(b[i]);
    return Math.sqrt(
        (a1[0] - a2[0]) * (a1[0] - a2[0]) + (a1[1] - a2[1]) * (a1[1] - a2[1])
    );
}