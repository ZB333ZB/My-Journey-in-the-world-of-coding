function factorialize(num) {
    if (num < 0) return 'Invalid number';

    let f = 1;
    for (let i = 1; i <= num; i++) f *= i;

    return f;
}

console.log(factorialize(5));