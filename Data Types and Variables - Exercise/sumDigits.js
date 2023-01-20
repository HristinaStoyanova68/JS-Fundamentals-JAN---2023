function sumDigits(num) {
    num = num.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        let currDigit = Number(num[i]);
        sum += currDigit;
    }
    console.log(sum);

}

sumDigits(543);