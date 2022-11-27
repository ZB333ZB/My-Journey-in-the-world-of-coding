function rot13(str) {
    const strArr = str.split(' ');
    const alph = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    let newStr = [];
    for (let i of strArr) {
        let word = '';
        for (let j of i) {
            if (/[.,\/#!$%\^&\*;:{}=\-_`~()?]/.test(j)) { word += j; continue; }
            const l = alph.indexOf(j) - 13;
            let k = parseInt(l + 1);
            if (k == 0) k = alph.length;
            word += alph.join('').slice(l, k);
        }
        newStr.push(word);
    }
    return newStr.join(' ');
}

console.log(rot13('SERR YBIR?'));