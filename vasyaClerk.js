function tickets(peopleInLine) {

    changeNotes = {
        '25': 0,
        '50': 0,
        '100': 0,
    };

    for (i = 0; i < peopleInLine.length; i++) {
        if (peopleInLine[i] === 25) {
            changeNotes['25'] += 1;
        } else if (peopleInLine[i] === 50) {
            if (changeNotes['25'] > 0) {
                changeNotes['50'] += 1;
                changeNotes['25'] -= 1;
            } else {
                return 'NO';
            }
        } else {
            if (changeNotes['50'] > 0 && changeNotes['25'] > 0) {
                changeNotes['50'] -= 1;
                changeNotes['25'] -= 1;
                changeNotes['100'] += 1;
            } else if (changeNotes['25'] >= 3) {
                changeNotes['25'] -= 3;
                changeNotes['100'] += 1;
            } else {
                return 'NO';
            }
        }
    }
    return 'YES';
}