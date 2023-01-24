function demoReverseAnArrayOfNumbers(count, numbers) {
    let result = [];
    for (let i = count - 1; i >= 0; i--) {
        result.push(numbers[i]);
    }
    console.log(result.join(" "));

}

demoReverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);

