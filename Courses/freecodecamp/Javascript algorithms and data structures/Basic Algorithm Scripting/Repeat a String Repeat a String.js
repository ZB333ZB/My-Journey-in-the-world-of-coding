function repeatStringNumTimes(str, num) {
    return num <= 0 ? "" : repeatStringNumTimes(str, num - 1) + str;
}

console.log(repeatStringNumTimes("abc", 3));