function frankenSplice(arr1, arr2, n) {
    return [arr2].map(e =>
        e.slice(0, n) + [...arr1] + e.slice(n + 1));
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));