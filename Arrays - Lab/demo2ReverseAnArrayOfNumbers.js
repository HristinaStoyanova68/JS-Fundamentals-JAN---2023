function demo2ReverseAnArrayOfNumbers(count, numbers) {
    let reversedNumbers = [];
    for (let i = 0; i < count; i++) {
        reversedNumbers[count - 1 - i] = numbers[i];
    }

    let result = "";
    for (let i = 0; i < reversedNumbers.length; i++) {
        result += reversedNumbers[i];
        if (i < reversedNumbers.length - 1) {
            result += " ";
        }

    }
    console.log(result);
}

demo2ReverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);