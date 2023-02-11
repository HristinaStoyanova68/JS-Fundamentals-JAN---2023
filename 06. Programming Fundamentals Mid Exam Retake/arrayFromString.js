function arrayFromString(text) {

    let textLength = text.length;
    let arrayFromString = [];
    let element = '';

    for (let i = 0; i < textLength; i++) {
            let currElem = text[i];

            if (currElem !== '>' && currElem !== ' ') {
                element += currElem;
            }
            if (currElem === '>' || currElem !== ' ' || i === textLength - 1) {
                    arrayFromString.push(element);
                    element = '';
            }
    }
    return arrayFromString;
}

console.log(arrayFromString(["12>13>11>20>66"]));