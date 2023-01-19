function demoSpecialNumbers(num) {
    for (let i = 1; i <= num; i++) {
        let digit = i.toString();
        let sum = 0;

        for (let j = 0; j < digit.length; j++) {
            let currChar = digit[j];
            let currDigit = Number(currChar);
            sum += currDigit;
        }
        let isSpecial = (sum === 5 || sum === 7 || sum === 11);
        console.log(`${i} -> ${isSpecial ? 'True' : 'False'}`);
    }
}

demoSpecialNumbers(20);