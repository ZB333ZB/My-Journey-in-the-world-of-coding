function myReplace(str, before, after) {
    let lBefore = before.toLowerCase(),
        lAfter = after.toLowerCase();

    return str.split(' ').reduce((r, e) =>
        e == lBefore ? r.concat(lAfter)
            : e == lBefore.charAt(0).toUpperCase() + lBefore.slice(1)
                ? r.concat(lAfter.charAt(0).toUpperCase() + lAfter.slice(1))
                : r.concat(e), []).join(' ');
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));