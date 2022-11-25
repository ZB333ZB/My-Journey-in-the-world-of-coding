function sumAll(arr) {
    const sortArr = arr.sort((a, b) => a - b);
    let sum = 0;
    for (let i = sortArr[0]; i <= sortArr[1]; i++) sum += i;
    return sum;
}

console.log(sumAll([1, 4]));