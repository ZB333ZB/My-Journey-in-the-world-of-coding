function uniteUnique(...arr) {
    return [...arr].flat(Infinity)
        .reduce((r, e) => r.indexOf(e) == -1 ? r.concat(e) : r, []);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));