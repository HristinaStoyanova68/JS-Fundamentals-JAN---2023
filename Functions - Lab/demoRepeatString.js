function demoRepeatString(text, repeatNumber) {
    let result = copyRepeatString(text, repeatNumber);
    return result;
    
}

function copyRepeatString(text, repeatNumber) {
    return text.repeat(repeatNumber);
}
copyRepeatString('abv', 3);
console.log(copyRepeatString('abv', 3));