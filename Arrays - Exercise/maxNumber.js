function maxNumber(numbers) {

    let topNumbersArray = [];

    for (let i = 0; i < numbers.length; i++) {
        let currNum = numbers[i];
        let isBigger = true;
        for (let j = i + 1; j < numbers.length; j++) {
            if (currNum <= numbers[j]) {
                isBigger = false;
            }
        }
        if (isBigger) {
            topNumbersArray.push(numbers[i]);
        }
    }
    console.log(topNumbersArray.join(" "));
}

maxNumber([27, 19, 42, 2, 13, 45, 48]);