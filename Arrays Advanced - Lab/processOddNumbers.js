function processOddNumbers(array) {
    //take numbers from odd positions and multiply them * 2
    let arrayLength = array.length;
    let oddPositionArray = [];

    for (let i = 0; i < arrayLength; i++) {
        if (i % 2 !== 0) {
            oddPositionArray.push(array[i] * 2);
        }
    }

    // make the  numbers in reversed order

    let oddPositionArrayLength = oddPositionArray.length;
    let reverseOrderArray = [];


    for (let i = oddPositionArrayLength - 1; i >= 0; i--) {
        reverseOrderArray.push(oddPositionArray[i]);
    }


    console.log(reverseOrderArray.join(' '));
}

processOddNumbers([10, 15, 20, 25]);
console.log('............');
processOddNumbers([3, 0, 10, 4, 7, 3]);