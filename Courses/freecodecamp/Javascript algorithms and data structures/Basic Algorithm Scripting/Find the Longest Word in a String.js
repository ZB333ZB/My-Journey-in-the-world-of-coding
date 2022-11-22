function findLongestWordLength(str) {
    return str.split(' ').reduce((c, e) =>
        e.length > c ? c = e.length : c, 0);
}

console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));