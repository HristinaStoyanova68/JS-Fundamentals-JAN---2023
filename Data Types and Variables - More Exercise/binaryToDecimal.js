function binaryToDecimal(num) {
    let numToString = num.toString();
    let decimal = 0;
    for (let i = 0; i < numToString.length; i++) {
        let currDigit = Number(numToString[i]);
        let powNum = (numToString.length - 1) - i;
        decimal += currDigit * Math.pow(2, powNum);


    }
    console.log(decimal);

}

binaryToDecimal(11110000);