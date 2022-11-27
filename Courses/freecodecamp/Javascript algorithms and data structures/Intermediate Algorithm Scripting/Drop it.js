function dropElements(arr, func) {
    let lastIndex = -1;
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) { lastIndex = i; break; }
    }
    return lastIndex != -1 ? arr.slice(lastIndex) : [];
}

console.log(dropElements([1, 2, 3, 4], function (n) { return n > 5; }));
