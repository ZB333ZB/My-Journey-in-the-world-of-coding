function smallestCommons(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    let mc = max;
    for (var i = min; i <= max; i += 1)
        mc = lcm(i, mc);
    return mc;
}

const lcm = (min, max) => {
    let c = max;
    while (c % min !== 0) c += max;
    return c;
}

console.log(smallestCommons([2, 10]));
