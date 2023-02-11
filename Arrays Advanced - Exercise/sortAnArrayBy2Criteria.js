function sortAnArrayBy2Criteria(input) {

    let newArray = [];

    while (input.length !== 0) {
        let minLength = Number.MAX_SAFE_INTEGER;
        let smalestElem = '';
        let minLetterElem = '';

        for (let currElem of input) {
            if (currElem.length < minLength) {
                minLength = currElem.length;
                smalestElem = currElem;
            }
            let numOfLetter = currElem.charCodeAt(0);
            let minLetterNumber = Number.MAX_SAFE_INTEGER;
            let maxNum1ForComparing = 90;
            let maxNum2ForComparing = 122;
            let minNum1ForComparing = 65;
            let minNum2ForComparing = 97;

            if ((numOfLetter <= maxNum1ForComparing && numOfLetter >= minNum1ForComparing) || (numOfLetter <= maxNum2ForComparing && numOfLetter >= minNum2ForComparing) && numOfLetter < minLetterNumber) {
                minLetterNumber = numOfLetter;
                minLetterElem = currElem;
            }
        }
        newArray.push(smalestElem);
        let index = input.indexOf(smalestElem);
        input.splice(index, 1);
    }

    console.log(newArray.join('\n'));
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
console.log('...................');
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
