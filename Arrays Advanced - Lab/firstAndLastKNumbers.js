function firstAndLastKNumbers(numbers) {

    let kNumber = Number(numbers[0]);
    let numbersLength = numbers.length;
    let firstKArray = [];
    let secondKArray = [];
    let counter = 0;

    for (let i = 1; i <= numbersLength; i++) {
        counter++;
        let currNum = Number(numbers[i]);

        firstKArray.push(currNum);
        if (counter === kNumber) {
            break;
        }
    }

    console.log(firstKArray.join(' '));
    counter = 0;

    for (let i = 0; i < numbersLength; i++) {
        counter++;
        let currNum = Number(numbers[(numbersLength - 1) - i]);

        secondKArray.unshift(currNum);
        if (counter === kNumber) {
            break;
        }
    }
    console.log(secondKArray.join(' '));

}

firstAndLastKNumbers([2, 7, 1, 5]);
console.log('..............');
firstAndLastKNumbers([3, 6, 7, 8, 9]);