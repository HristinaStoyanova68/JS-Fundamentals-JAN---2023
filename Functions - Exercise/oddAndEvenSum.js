function oddAndEvenSum(num) {

    let evenSum = 0;
    let oddSum = 0;
    let numAsString = num.toString();

    for (let char of numAsString) {
        let currChar = Number(char);

        if (currChar % 2 === 0) {
            evenSum += currChar;
        } else {
            oddSum += currChar;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

oddAndEvenSum(3495892137259234);