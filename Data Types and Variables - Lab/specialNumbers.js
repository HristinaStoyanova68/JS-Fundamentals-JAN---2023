function specialNumbers(num) {

    for (let i = 1; i <= num; i++) {
        let digit = i.toString();
        let sum = 0;

        for (let j = 0; j < digit.length; j++) {
            let currChar = digit[j];
            let currDigit = Number(currChar);
            sum += currDigit;
        }
        let isSpecial = false;
        if (sum === 5 || sum === 7 || sum === 11) {
            isSpecial = true;
            console.log(`${digit} -> True`);
        } else {
            console.log(`${digit} -> False`);
        }


    }

}

specialNumbers(20);