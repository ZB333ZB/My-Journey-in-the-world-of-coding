function sumFibs(num) {
    let fibSeq = [1, 1];
    for (let i = 2; fibSeq[fibSeq.length - 1] <= num; i++) {
        fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
    }
    if (fibSeq[fibSeq.length - 1] > num) fibSeq.pop();
    return fibSeq.filter(e => e % 2 != 0).reduce((r, e) => r += e);
}

console.log(sumFibs(10));