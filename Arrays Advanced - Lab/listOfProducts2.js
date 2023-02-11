function listOfProducts2(input) {

    let numbersArrFromWords = [];

    for (let i = 0; i < input.length; i++) {
        let currWord = input[i];

        let firstLetterAsNumber = currWord.charCodeAt(currWord[0]);
        numbersArrFromWords.push(firstLetterAsNumber);
    }
    let newNumbersArray = [];

    while (numbersArrFromWords.length !== 0) {

        let minNumber = 90;
        let minIndex = 0;

        for (let i = 0; i < numbersArrFromWords.length; i++) {

            let currNum = numbersArrFromWords[i];

            if (currNum < minNumber) {
                minNumber = currNum;
                minIndex = i;
            }
        }
        newNumbersArray.push(minNumber);
        let compareArr = [];
        for (let i = 0; i < numbersArrFromWords.length; i++) {
            if (i !== minIndex) {
                compareArr.push(numbersArrFromWords[i]);
            }
        }
        numbersArrFromWords = compareArr;
    }
    let result = '';

    for (let i = 0; i < newNumbersArray.length; i++) {

        let letterFromNumber = String.fromCharCode(newNumbersArray[i]);

        for (let j = 0; j < input.length; j++) {
            let currWord = input[j];
            let firstLetter = currWord[0];
            if (firstLetter === letterFromNumber) {
                result = currWord;
                console.log(`${i + 1}.${result}`);
            }
        }

    }
}

listOfProducts2(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
console.log('...........');
listOfProducts2(['Watermelon', 'Banana', 'Apples']);