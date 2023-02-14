function janSNotation(input) {
    let inputLength = input.length;
    let operandsArr = [];
    // let operatorsArr = [];
    let result = 0;

    for (let i = 0; i < inputLength; i++) {
        let currElem = input[i];

        if (typeof (currElem) === 'number') {
            operandsArr.push(Number(currElem));
        } else {
            if (operandsArr.length >= 2) {

                let secondOperand = operandsArr.pop();
                let firstOperand = operandsArr.pop();

                if (currElem === '+') {
                    result = firstOperand + secondOperand;

                } else if (currElem === '-') {
                    result = firstOperand - secondOperand;

                } else if (currElem === '*') {
                    result = firstOperand * secondOperand;

                } else if (currElem === '/') {
                    result = firstOperand / secondOperand;

                }
                operandsArr.push(result);
            } else {
                console.log("Error: not enough operands!");
                return;
            }
        }
    }
    if (operandsArr.length > 1) {
        console.log("Error: too many operands!");
        return;
    }



    console.log(operandsArr.join());

}

janSNotation([3, 4, '+']);
console.log('....................');
janSNotation([5, 3, 4, '*', '-']);
console.log('....................');
janSNotation([7, 33, 8, '-']);
console.log('....................');
janSNotation([15, '/']);
