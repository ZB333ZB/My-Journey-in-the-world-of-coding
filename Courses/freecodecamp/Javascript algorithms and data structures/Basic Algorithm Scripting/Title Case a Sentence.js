function titleCase(str) {
    return str.split(' ').map(e =>
        e.slice(0, 1).toUpperCase() + e.slice(1).toLowerCase()).join(' ');
}

console.log(titleCase("sHoRt AnD sToUt"));