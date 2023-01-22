function sumDigits(num) {
    let numToString = num.toString();
    let sum = 0;
    for (let i = 0; i < numToString.length; i++) {
        let currDigit = Number(numToString[i]);
        sum += currDigit;
    }
    console.log(sum);

}

sumDigits(543);