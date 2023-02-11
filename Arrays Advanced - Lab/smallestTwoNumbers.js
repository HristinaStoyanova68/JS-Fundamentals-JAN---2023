function smallestTwoNumbers(numbers) {
    let smallestNumber = Number.MAX_SAFE_INTEGER;
    let arrOfSmallestNumbers = [];
    let firstSmallestNum = 0;
    for (let currNum of numbers) {
        if (currNum < smallestNumber) {
            smallestNumber = currNum;
        }
    }
    firstSmallestNum = smallestNumber;
    arrOfSmallestNumbers.push(firstSmallestNum);
    smallestNumber = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < numbers.length; i++) {
        let currNum = Number(numbers[i]);
        if (currNum !== firstSmallestNum) {
            if (currNum < smallestNumber) {
                smallestNumber = currNum;
            }
        }

    }
    arrOfSmallestNumbers.push(smallestNumber);
    console.log(arrOfSmallestNumbers.join(' '));



}

smallestTwoNumbers([30, 15, 50, 5]);
console.log('............');
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);