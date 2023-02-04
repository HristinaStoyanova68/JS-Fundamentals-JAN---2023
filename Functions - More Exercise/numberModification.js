function numberModification(modifiedNumber) {

    while (checkAverage(modifiedNumber) < 5) {
        modifiedNumber += '9';
    }
    console.log(modifiedNumber);

    function calculateSum(num) {
        let numAsString = num.toString();
        let numAsStringLength = numAsString.length;
        let sum = 0;

        for (let i = 0; i < numAsStringLength; i++) {
            let currNum = Number(numAsString[i]);
            sum += currNum;
        }
        return sum;
    }

    function checkAverage(number) {
        return calculateSum(number) / number.toString().length;
    }

}

numberModification(5835);