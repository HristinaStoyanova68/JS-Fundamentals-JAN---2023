function distinctArray(numbers) {

    let numbersLength = numbers.length
    let removableNumbersArray = [];

    for (let i = 0; i < numbersLength; i++) {
        let currNum = numbers[i];
        let counter = 0;

        for (let j = i; j < numbersLength; j++) {
            let numForChecking = numbers[j];

            if (currNum === numForChecking) {
                counter++;
            }
            if (counter > 1) {

                removableNumbersArray.push(currNum);
                break;
            }
        }
    }

    let removableNumbersArrayLength = removableNumbersArray.length;
    let distinctedArray = [];

    for (let i = 0; i < removableNumbersArrayLength; i++) {
        let removableNumber = removableNumbersArray[i];

        let count = 0;
        for (let j = 0; j < numbersLength; j++) {
            let currNumber = numbers[j];
            if (removableNumber === currNumber) {
                count++;
            }
            if (removableNumber === currNumber && count === 1 || removableNumber !== currNumber) {
                distinctedArray.push(currNumber);
            }
        }
        numbers = distinctedArray;
        distinctedArray = [];
    }
    console.log(numbers.join(' '));

}

distinctArray([1, 2, 3, 4]);
console.log('.............');
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
console.log('.............');
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);