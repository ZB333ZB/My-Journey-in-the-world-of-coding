function bouncer(arr) {
    return arr.reduce((r, e) => e ? r.concat(e) : r, []);
}

console.log(bouncer([7, "ate", "", false, 9]));