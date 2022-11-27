//max 4-digits number
function convertToRoman(num) {
    const numArr = num.toString().split('');
    const length = numArr.length;
    if (length == 4)
        return thousandsToRoman(numArr[0]) + hundredsToRoman(numArr[1])
            + tensToRoman(numArr[2]) + digitToRoman(numArr[3]);
    else if (length == 3)
        return hundredsToRoman(numArr[0]) + tensToRoman(numArr[1])
            + digitToRoman(numArr[2]);
    else if (length == 2)
        return tensToRoman(numArr[0]) + digitToRoman(numArr[1]);
    else if (length == 1)
        return digitToRoman(numArr[0]);
}

const digitToRoman = (num) => {
    switch (Number(num)) {
        case 0: return '';
        case 1: return 'I';
        case 2: return 'II';
        case 3: return 'III';
        case 4: return 'IV';
        case 5: return 'V';
        case 6: return 'VI';
        case 7: return 'VII';
        case 8: return 'VIII';
        case 9: return 'IX';
    }
}

const tensToRoman = (num) => {
    switch (Number(num)) {
        case 0: return '';
        case 1: return 'X';
        case 2: return 'XX';
        case 3: return 'XXX';
        case 4: return 'XL';
        case 5: return 'L';
        case 6: return 'LX';
        case 7: return 'LXX';
        case 8: return 'LXXX';
        case 9: return 'XC';
    }
}

const hundredsToRoman = (num) => {
    switch (Number(num)) {
        case 0: return '';
        case 1: return 'C';
        case 2: return 'CC';
        case 3: return 'CCC';
        case 4: return 'CD';
        case 5: return 'D';
        case 6: return 'DC';
        case 7: return 'DCC';
        case 8: return 'DCCC';
        case 9: return 'CM';
    }
}

const thousandsToRoman = (num) => {
    switch (Number(num)) {
        case 0: return '';
        case 1: return 'M';
        case 2: return 'MM';
        case 3: return 'MMM';
        case 4: return 'MV̅';
        case 5: return 'V̅';
        case 6: return 'V̅M';
        case 7: return 'V̅MM';
        case 8: return 'V̅MMM';
        case 9: return 'MX̅';
    }
}

console.log(convertToRoman(3761));