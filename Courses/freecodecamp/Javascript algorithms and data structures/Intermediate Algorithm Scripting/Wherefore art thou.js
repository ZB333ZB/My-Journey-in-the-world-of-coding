function whatIsInAName(collection, source) {
    return collection.filter(c => Object.keys(source).every(sk =>
        c[sk] && c[sk] === source[sk]));
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));