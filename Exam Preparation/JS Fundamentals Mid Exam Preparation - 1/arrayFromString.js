function arrayFromString(string) {
    let array = [];
    let elem = '';
    let stringLength = string.length;

    for (let i = 0; i < stringLength; i++) {
        let currElem = string[i];

        if (currElem !== '>' && currElem !== ' ') {
            elem += currElem;
        }
        if (currElem === '>' || currElem === ' ' || i === stringLength - 1) {
            array.push(elem);
            elem = '';
        }
    }
    return array;

}

console.log(arrayFromString("12>13>11>20>66"));
console.log('.................');
console.log(arrayFromString("Fire 8 100"));