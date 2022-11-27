function palindrome(str) {
    const nStr = str.replace(/[., \/#!$%\^&\*;:{}=\-_`~()\s]/g, '').toLowerCase();
    return nStr == [...nStr].reverse().join('');
}

console.log(palindrome("eye"));