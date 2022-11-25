function pairElement(str) {
    return [...str]
        .reduce((r, e) => r.concat([[e]]), [])
        .map(e => {
            switch (e[0]) {
                case 'A': e.push('T');
                    break;
                case 'T': e.push('A');
                    break;
                case 'C': e.push('G');
                    break;
                case 'G': e.push('C');
                    break;
            }
            return e;
        });
}

console.log(pairElement("GCG"));