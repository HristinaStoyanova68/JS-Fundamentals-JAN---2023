function evenAndOddSubtraction(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let currNum = numbers[i];
        if (currNum % 2 === 0) {
            sum += currNum;
        } else {
            sum -= currNum;
        }
    }
    console.log(sum);
}

evenAndOddSubtraction([2, 4, 6, 8, 10]);