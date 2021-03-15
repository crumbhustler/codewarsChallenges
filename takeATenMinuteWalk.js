function isValidWalk(walk) {
    if (walk.length === 10) {
        var x = y = 0;
        walk.forEach(function(val) {
            switch (val) {
                case 'n':
                    y++;
                    break;
                case 's':
                    y--;
                    break;
                case 'w':
                    x--;
                    break;
                case 'e':
                    x++;
                    break;
            }
        });
        return (x === 0 && y === 0);
    } else {
        return false;
    }
}