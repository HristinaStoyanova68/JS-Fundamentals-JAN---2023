function lowerOrUpper(char) {
    let numOfChar = char.charCodeAt();
    if (numOfChar >= 65 && numOfChar <= 90) {
        console.log(`upper-case`);
    } else if (numOfChar >= 97 && numOfChar <= 122) {
        console.log(`lower-case`);
    }


}

lowerOrUpper("f");