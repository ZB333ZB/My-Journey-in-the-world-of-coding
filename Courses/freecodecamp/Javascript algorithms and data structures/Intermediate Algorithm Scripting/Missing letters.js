function fearNotLetter(str) {
    const letterRange = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const startIndex = letterRange.indexOf(str.slice(0, 1));
    return [...str]
        .map((e, i) => e != letterRange[startIndex + i] ? letterRange[startIndex + i] : undefined)
        .find(e => e != undefined);
}

console.log(fearNotLetter("abcdefghjklmno"));