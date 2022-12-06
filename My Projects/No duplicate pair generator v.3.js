const names = ['Don', 'Jon', 'Kat', 'Ann', 'Bob', 'Cat', 'Han', 'Ed', 'Jack'];

//gets all uniquePairs for the given array
const getUniquePairs = (names) => {
  return names.flatMap((item1, index1) =>
    names.flatMap((item2, index2) => (index1 > index2) ? [[item1, item2]] : []));
}

//check if any pair in the array has all the names from the matching pair
const matchPairInArrOfPairs = (pairs, matchPair) => {
  return pairs.some(arrPair => arrPair.includes(matchPair[0]) && arrPair.includes(matchPair[1]))
}

//check if each of the names of the pair in roundPairs never made a pair with the given name
const getUniquePairForName = (usedPairs, roundPair, name) => {
  return usedPairs.find(usedPair => !(usedPair.includes(name) && (usedPair.includes(roundPair[0]) || usedPair.includes(roundPair[1]))));
}

const makePairs = (names, roundTotal) => {
  let result = [], usedPairs = [], usedNames = [], roundPairs = [], isUnique = false;
  for (let round = 0; round < roundTotal; round++) {
    //uniquePairs reshuffled every round
    const uniquePairs = getUniquePairs(names).sort(() => Math.random() - 0.5);
    for (let uniquePair of uniquePairs) {
      if (!matchPairInArrOfPairs(usedPairs, uniquePair) &&
        (!usedNames.includes(uniquePair[0]) && !usedNames.includes(uniquePair[1]))) isUnique = true;
      if (isUnique) {
        roundPairs.push(uniquePair);
        usedNames.push(...uniquePair);
        usedPairs.push(uniquePair);
        isUnique = false;
      }
    }

    //if an odd name remained, search for a uniquePair in roundPairs
    const remainedName = names.find(name => !usedNames.includes(name));
    if (remainedName != undefined) {
      for (let pair of roundPairs) {
        if (getUniquePairForName(usedPairs, pair, remainedName) != undefined) {
          roundPairs[roundPairs.indexOf(pair)].push(remainedName);
          break;
        }
      }
    }

    result.push(roundPairs);
    usedNames = [];
    roundPairs = [];
  }

  return result;
}

console.log(makePairs(names, 4));