function signCheck(num1, num2, num3) {
    //when we multiply by a negative number we change the sign
    //cneck if number is negative num1 < 0
    //create a function to change the sign if second parameter is true

    let sign = 'Positive';
    let isNum1Neative = num1 < 0;
    sign = checkAndChangeSign(sign, isNum1Neative);
    let isNum2Neative = num2 < 0;
    sign = checkAndChangeSign(sign, isNum2Neative);
    let isNum3Neative = num3 < 0;
    sign = checkAndChangeSign(sign, isNum3Neative);
    return sign;

    function checkAndChangeSign(sign, shouldChange) {
        if (shouldChange === false) {
            return sign;
        }

        if (sign === 'Positive') {
            sign = 'Negative';
        } else {
            sign = 'Positive';
        }

        return sign;
    }
}

console.log(signCheck(5, 12, -15));
console.log(signCheck(-6, -12, 14));
console.log(signCheck(-1, -2, -3));
console.log(signCheck(-5, 1, 1));