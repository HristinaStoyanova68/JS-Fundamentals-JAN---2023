function binaryToDecimal(num) {
    num = num.toString();
    let decimal = 0;
    for (let i = 0; i < num.length; i++) {
        let currDigit = Number(num[i]);
        let powNum = (num.length - 1) - i;
        decimal += currDigit * Math.pow(2, powNum);


    }
    console.log(decimal);

}

binaryToDecimal(11110000);