const uniqueGroupGenerator = (names, roundTotal) => {
    const uniquePairs = (names) => names.flatMap((item1, index1) =>
        names.flatMap((item2, index2) => (index1 > index2) ? [[item1, item2]] : []));

    let result = [], usedPairs = [], usedNames = [], roundPairs = [], isUnique = false;
    for (let i = 0; i < roundTotal; i++) {
        for (let pair of uniquePairs) {
            isUnique = (pair.every(name => usedNames.indexOf(name) == -1)) && usedPairs.indexOf(pair) == -1;
            if (isUnique) {
                roundPairs.push(pair);
                usedPairs.push(pair);
                usedNames.push(...pair);
            }
        }
        result.push(roundPairs);
        roundPairs = [];
        usedNames = [];
    }
    return result;
}

const names = ['Don', 'Jon', 'Kat', 'Ann', 'Bob', 'Cat', 'Han', 'Ed', 'Jack'];

console.log(uniqueGroupGenerator(names, 4));