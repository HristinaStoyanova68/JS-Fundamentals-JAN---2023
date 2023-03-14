function lettersChangeNumbers(string) {

    let stringAsArray = string.split(' ');
    let sum = 0;

    let alphabeticalUpperLettersArray = alphabetUpperCase();
    let alphabeticalLowerLettersArray = alphabetLowerCase();

    for (let element of stringAsArray) {

        let firstLetter = element[0];
        let secondLetter = element[element.length - 1];
        let number = Number(element.substring(1, element.length - 1));

        if (alphabeticalUpperLettersArray.includes(firstLetter)) {
            let index = alphabeticalUpperLettersArray.indexOf(firstLetter);
            number /= index + 1;
        } else if (alphabeticalLowerLettersArray.includes(firstLetter)) {
            let index = alphabeticalLowerLettersArray.indexOf(firstLetter);
            number *= index + 1;
        }
        sum += number;

        if (alphabeticalUpperLettersArray.includes(secondLetter)) {
            index = alphabeticalUpperLettersArray.indexOf(secondLetter) + 1;
            sum -= index;
        } else if (alphabeticalLowerLettersArray.includes(secondLetter)) {
            index = alphabeticalLowerLettersArray.indexOf(secondLetter) + 1;
            sum += index;
        }
    }

    console.log(sum.toFixed(2));

    function alphabetUpperCase() {
        let alpha = Array.from(Array(26)).map((e, i) => i + 65);
        let alphabet = alpha.map((x) => String.fromCharCode(x));
        return alphabet;
    }

    function alphabetLowerCase() {
        let alpha = Array.from(Array(26)).map((e, i) => i + 97);
        let alphabet = alpha.map((x) => String.fromCharCode(x));
        return alphabet;
    }
}

lettersChangeNumbers('A12b s17G');
console.log('...........');
lettersChangeNumbers('P34562Z q2576f H456z');
console.log('.......');
lettersChangeNumbers('a1A');