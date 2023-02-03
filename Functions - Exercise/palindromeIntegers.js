function palindromeIntegers(array) {


    let arrayLength = array.length

    for (let i = 0; i < arrayLength; i++) {
        let currNumber = array[i];

        if (palindrome(currNumber) === true) {
            console.log(`true`);
        } else {
            console.log(`false`);
        }
    }

    function palindrome(num) {
        let numAsString = num.toString();
        let numAsStringLength = numAsString.length;
        let isPalindrome = true;

        for (let i = 0; i < numAsStringLength - 1; i++) {
            let currNum = Number(numAsString[i]);
            let compareNum = Number(numAsString[(numAsStringLength - 1) - i]);

            if (currNum !== compareNum) {
                isPalindrome = false;
                return;
            }
        }
        return isPalindrome;
    }


}

palindromeIntegers([32, 2, 232, 1010]);