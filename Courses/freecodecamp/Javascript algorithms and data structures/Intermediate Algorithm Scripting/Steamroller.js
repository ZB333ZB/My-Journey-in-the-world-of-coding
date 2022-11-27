function steamrollArray(arr) {
    const flatArr = [];
    const flatArrFunc = (arr) => {
        let i = 0;
        while (i < arr.length) {
            Array.isArray(arr[i]) ? flatArrFunc(arr[i])
                : flatArr.push(arr[i]);
            i++;
        }
    }
    flatArrFunc(arr);
    return flatArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));