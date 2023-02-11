function removeDuplicatsAtArrays(removableNumbersArray, numbers) {

    let numbersLength = numbers.length;
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

removeDuplicatsAtArrays([7, 2], [7, 8, 9, 7, 2, 3,

    4, 1, 2]);