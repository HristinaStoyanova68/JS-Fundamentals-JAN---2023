function upperOrLower(command, str, startIndex, endIndex) {

    if (command === 'Upper') {
        let text = str.substring(startIndex, endIndex);
        let replacement = text.toUpperCase();
        str = str.replace(text, replacement);
    } else if (command === 'Lower') {
        let text = str.substring(startIndex, endIndex);
        let replacement = text.toLowerCase();
        str = str.replace(text, replacement);
    }
    return str;
}

console.log(upperOrLower('Upper', 'abcdefghijk', 2, 5));
console.log(upperOrLower('Lower', 'abCDEFghijk', 2, 5));