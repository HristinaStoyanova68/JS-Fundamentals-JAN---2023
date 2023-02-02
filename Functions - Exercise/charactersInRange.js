function charactersInRange(char1, char2) {

    let rangeStart = Math.min(char1.charCodeAt(), char2.charCodeAt());
    let rangeEnd = Math.max(char1.charCodeAt(), char2.charCodeAt());
    let resultString = '';

    for (let currChar = rangeStart + 1; currChar < rangeEnd; currChar++) {
        let singleChar = String.fromCharCode(currChar);

        if (currChar === rangeEnd - 1) {
            resultString += `${singleChar}`;
        } else {
            resultString += `${singleChar} `;
        }
    }

    console.log(resultString);

}

charactersInRange('C', '#');