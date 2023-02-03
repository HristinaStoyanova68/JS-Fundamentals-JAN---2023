function passwordValidator(password) {

    let hasValidLength = validateLength(password);
    let hasValidSymbol = validateJustLettersAndDigits(password);
    let hasValidDigit = checkForTwoDigits(password);
    printResult(hasValidLength, hasValidSymbol, hasValidDigit);

    function validateLength(password) {
        return password.length >= 6 && password.length <= 10;
    }

    function validateJustLettersAndDigits(text) {

        for (let char of text) {
            let num = char.charCodeAt(0);
            let isUpper = upperLetters(num);
            let isLower = lowerLetters(num);
            let isDigits = containsDigits(num);

            if (!isUpper && !isLower && !isDigits) {
                return false;
            }

        }
        return true;
    }
    function upperLetters(num) {
        return num >= 65 && num <= 90;
    }

    function lowerLetters(num) {
        return num >= 97 && num <= 122;
    }

    function containsDigits(num) {
        return num >= 48 && num <= 57;
    }

    function checkForTwoDigits(password) {
        let counter = 0;
        for (let char of password) {
            let isDigits = containsDigits(char.charCodeAt(0));
            if (isDigits) {
                counter++;
            }
        }
        if (counter >= 2) {
            return true;
        }
        return false;
    }

    function printResult(validLength, validSymbol, validDigits) {

        if (!validLength) {
            console.log('Password must be between 6 and 10 characters');
        }
        if (!validSymbol) {
            console.log('Password must consist only of letters and digits');
        }
        if (!validDigits) {
            console.log('Password must have at least 2 digits');
        }
        if (validLength && validSymbol && validDigits) {
            console.log("Password is valid");
        }
    }

}

passwordValidator('logIn');
console.log(".............");
passwordValidator('MyPass123');
console.log(".............");
passwordValidator('Pa$s$s');