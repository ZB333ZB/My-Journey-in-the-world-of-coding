function diffArray(arr1, arr2) {
    const sortArr1 = arr1.sort((a, b) => a === b ? 0 : a < b ? -1 : 1);
    const sortArr2 = arr2.sort((a, b) => a === b ? 0 : a < b ? -1 : 1);

    const empties1 = sortArr1.map(e1 => sortArr2.filter(e2 => e1 == e2));
    const empties2 = sortArr2.map(e1 => sortArr1.filter(e2 => e1 == e2));

    const diffs1 = empties1.reduce((d, e, i) =>
        e.length == 0 ? d.concat(sortArr1[i]) : d, []);
    const diffs2 = empties2.reduce((d, e, i) =>
        e.length == 0 ? d.concat(sortArr2[i]) : d, []);

    return diffs1.concat(diffs2);
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));