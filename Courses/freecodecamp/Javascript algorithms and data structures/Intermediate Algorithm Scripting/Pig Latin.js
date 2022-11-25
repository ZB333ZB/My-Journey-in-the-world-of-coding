function translatePigLatin(str) {
    const cInitial = str.match(/^((?![aeiou])[a-z])*/gi).join();

    return cInitial == '' ? str + 'way'
        : str.slice(0 + cInitial.length) + cInitial + 'ay';

}

console.log(translatePigLatin("stronsonant"));