function charactersInRange(char1, char2) {

    let rangeStart = Math.min(char1.charCodeAt(), char2.charCodeAt());
    let rangeEnd = Math.max(char1.charCodeAt(), char2.charCodeAt());
    let resultArray = [];

    for (let currChar = rangeStart + 1; currChar < rangeEnd; currChar++) {
        let singleChar = String.fromCharCode(currChar);

        resultArray.push(singleChar);
    }

    console.log(resultArray.join(' '));

}

charactersInRange('C', '#');