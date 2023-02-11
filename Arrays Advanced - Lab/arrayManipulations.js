function arrayManipulations(input) {

    let array = input[0];
    let arrayWithNumbers = arrayFromString(array);
    let numbersArray = numbersAsArray(arrayWithNumbers);

    let inputLength = input.length;

    for (let i = 1; i < inputLength; i++) {
        let currCommand = input[i];
        currCommand = arrayFromString(currCommand);
        let command = currCommand[0];

        switch (command) {
            case 'Add':
                let addNumber = Number(currCommand[1]);
                numbersArray.push(addNumber);
                break;
            case 'Remove':
                let removableNumber = Number(currCommand[1]);
                let arrayAfterRemove = [];
                for (let num of numbersArray) {

                    if (num !== removableNumber) {
                        arrayAfterRemove.push(num);
                    }
                }
                numbersArray = arrayAfterRemove;
                break;
            case 'RemoveAt':
                let removableIndex = Number(currCommand[1]);

                let arrayAfterRemoveAt = [];
                for (let i = 0; i < numbersArray.length; i++) {
                    if (i !== removableIndex) {
                        arrayAfterRemoveAt.push(numbersArray[i]);
                    }
                }
                numbersArray = arrayAfterRemoveAt;
                break;
            case 'Insert':
                let insertableNumber = Number(currCommand[1]);
                let indexForInsert = Number(currCommand[2]);

                let arrayAfterInsert = [];

                for (let i = 0; i < numbersArray.length; i++) {
                    if (i === indexForInsert) {
                        arrayAfterInsert.push(insertableNumber);

                    }
                    arrayAfterInsert.push(numbersArray[i]);
                }
                numbersArray = arrayAfterInsert;
                break;
        }
    }
    console.log(numbersArray.join(' '));
    //making an array from string

    function arrayFromString(string) {

        let stringLength = string.length;
        let arrayFromStr = [];
        let element = '';

        for (let i = 0; i < stringLength; i++) {
            let currElem = string[i];
            if (currElem !== ' ') {
                element += currElem;
            }
            if (currElem === ' ' || i === stringLength - 1) {
                arrayFromStr.push(element);
                element = '';
            }
        }
        return arrayFromStr;
    }

    //make an array of numbers from array of strings

    function numbersAsArray(arrayOfStrings) {

        let numbersArray = [];

        for (let elem of arrayOfStrings) {

            numbersArray.push(Number(elem));
        }
        return numbersArray;
    }

}

arrayManipulations([
    '4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
]);
console.log('.................');
arrayManipulations([
    '6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'
]);

