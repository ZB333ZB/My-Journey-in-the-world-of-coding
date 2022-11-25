function destroyer(arr, ...args) {
    return arr.reduce((d, e) =>
        args.indexOf(e) < 0 ? d.concat(e) : d, []);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));