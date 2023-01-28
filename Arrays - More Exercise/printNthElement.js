function printNthElement(input) {
    let n = Number(input[input.length - 1]);
    let newElem = "";

    for (let i = 0; i < input.length - 1; i += n) {
        let currElem = input[i];
        newElem += `${currElem} `;
    }
    console.log(newElem.trim());

}

printNthElement(['1', '2', '3', '4', '5', '6']);