function demoSumDigits(num) {
    let sum = 0;
    let numAsString = num.toString();

    for (let char of numAsString) {
        sum += Number(char);
    }
    console.log(sum);
}

demoSumDigits(245678);