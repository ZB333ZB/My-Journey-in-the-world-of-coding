const uniqueGroupGenerator = (arr, groupSize) => {
    let newArr = [], groups = [];
    let rand = Math.floor(Math.random() * names.length);
    let i = 0;
    while (i < arr.length) {
        while (newArr.indexOf(arr[rand]) != - 1) rand = Math.floor(Math.random() * names.length);
        newArr.push(arr[rand]);
        i++;
    }
    for (let i = 0; i < newArr.length; i += groupSize) {
        groups.push(newArr.slice(i, i + groupSize))
    }
    return groups;
}

const names = ['Don', 'Jon', 'Kat', 'Ann', 'Bob', 'Cat', 'Han', 'Ed', 'Fay', 'Gil', 'Ian'];

console.log(uniqueGroupGenerator(names, 4));