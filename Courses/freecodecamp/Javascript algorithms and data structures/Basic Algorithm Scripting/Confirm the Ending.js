function confirmEnding(str, target) {
    return [str].some(e =>
        e.slice(e.length - target.length) == target);
}

console.log(confirmEnding("Congratulation", "ion"));