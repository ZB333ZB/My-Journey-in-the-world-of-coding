function sumPrimes(num) {
    const primes = [];
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes.reduce((r, e) => r += e);
}

function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}

console.log(sumPrimes(977));