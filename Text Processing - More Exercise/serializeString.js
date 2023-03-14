function serializeString(input) {

    let stringAsArray = input[0].split('');

    let objectWithAllLetters = {};

    for (let i = 0; i < stringAsArray.length; i++) {
        let letterIndexes = [];
        let currLetter = stringAsArray[i];

        if (!objectWithAllLetters.hasOwnProperty(currLetter)) {

            objectWithAllLetters[currLetter] = letterIndexes;
            letterIndexes.push(i);
        } else {

            let currLetterIndexes = objectWithAllLetters[currLetter];
            currLetterIndexes.push(i);
        }
    }

    let entries = Object.entries(objectWithAllLetters);

    for (const element of entries) {
        let stringForPrint = `${element[0]}:`;
        for (const index of element[1]) {
            stringForPrint += `${index}/`
        }
        console.log(stringForPrint.substring(0, stringForPrint.length - 1));
    }
}

serializeString(["abababa"]);
console.log('........');
serializeString(["avjavamsdmcalsdm"]);