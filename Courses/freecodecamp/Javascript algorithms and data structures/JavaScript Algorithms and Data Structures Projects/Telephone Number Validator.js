function telephoneCheck(str) {
    return (/^1?[\s]?[(]?\d{3}[)]?[\s-]?\d{3}[\s-]?\d{4}$/.test(str)) &&
        //↓↓↓check if str has only 1 bracket. Don't know how to do it with regex;)
        ([...str].filter(e => e == '(' || e == ')').length == 1 ? false : true);
}
console.log(telephoneCheck("1 (555) 555-5555"));