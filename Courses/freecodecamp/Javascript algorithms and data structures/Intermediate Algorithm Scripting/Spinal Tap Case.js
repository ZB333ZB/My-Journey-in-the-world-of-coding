function spinalCase(str) {
    return str.replace(/(a-z)(A-z)/g, '$1 $2').split(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g)
        .map(e => e.toLowerCase()).join('-');
}

console.log(spinalCase('This Is Spinal Tap'));