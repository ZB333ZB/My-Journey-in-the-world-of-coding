const uniqueGroupGenerator = (arr, groupSize) => {
    const randomNum = (maxNum) => {
        return rand = Math.floor(Math.random() * maxNum);
    }

    const arrShuffle = (arr) => {
        let i = 0, rand, shuffledArr = [];
        while (i < arr.length) {
            do { rand = randomNum(arr.length) } while (shuffledArr.indexOf(arr[rand]) != - 1);
            shuffledArr.push(arr[rand]);
            i++;
        }
        return shuffledArr;
    }

    let shuffledArr = arrShuffle(arr), groups = [];

    for (let i = 0; i < shuffledArr.length; i += groupSize)
        groups.push(shuffledArr.slice(i, i + groupSize))
    return groups;
}

const names = ['Don', 'Jon', 'Kat', 'Ann', 'Bob', 'Cat', 'Han', 'Ed', 'Fay', 'Gil', 'Ian'];

console.log(uniqueGroupGenerator(names, 4));