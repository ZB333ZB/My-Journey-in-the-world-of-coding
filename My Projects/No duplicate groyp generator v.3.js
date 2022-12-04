//The func creates given number of rounds with pairs from the given array of names, so that no pair repeats throughout all the rounds, and no name repeats throughout each round

const uniqueGroupGenerator = (names, roundTotal) => {
    const getRandom = (maxNum) => {
        return rand = Math.floor(Math.random() * maxNum);
    }

    const getRandomOddNames = (names, roundTotal) => {
        let oddNames = [];

        for (let i = names.length; i % roundTotal != 0; i--) {
            const num = getRandom(names.length);
            oddNames.push(names[num]);
            names.slice(num, num + 1);
        }
        return oddNames;
    }

    const getUniquePairs = (names) => names.flatMap((item1, index1) =>
        names.flatMap((item2, index2) => (index1 > index2) ? [[item1, item2]] : []));

    const sliceMatches = (matches, arr) => {
        for (let match of matches)
            return arr.filter(e => e != match);
    }

    let result = [], usedPairs = [], usedNames = [], roundPairs = [], isUnique = false;
    for (let i = 0; i < roundTotal; i++) {
        let oddNames = getRandomOddNames(names, roundTotal);
        const evenNames = sliceMatches(oddNames, [...names]);
        for (let pair of getUniquePairs(evenNames)) {
            isUnique = (pair.every(name => usedNames.indexOf(name) == -1)) && usedPairs.indexOf(pair) == -1;
            if (isUnique) {
                roundPairs.push(pair);
                usedPairs.push(pair);
                usedNames.push(...pair);
            }
        }
        for (let oddName of oddNames) {
            const num = getRandom(roundPairs.length);
            roundPairs[num].push(oddName);
        }
        result.push(roundPairs);
        roundPairs = [];
        usedNames = [];
    }
    return result;
}

const names = ['Don', 'Jon', 'Kat', 'Ann', 'Bob', 'Cat', 'Han', 'Ed', 'Fay', 'Jack'];

console.log(uniqueGroupGenerator(names, 3));