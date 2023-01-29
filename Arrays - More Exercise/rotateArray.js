function rotateArray(input) {
    let numOfRotation = Number(input[input.length - 1]);

    let tempResult = [];
    let rotateResult = [];
    for (let i = 0; i < input.length - 1; i++) {

        tempResult.push(input[i]);
    }
    for (let i = 1; i <= numOfRotation; i++) {
        let elemToMove = tempResult[tempResult.length - 1];
        rotateResult.push(elemToMove);
        for (let j = 0; j < tempResult.length - 1; j++) {
            if (j !== tempResult.length - 1) {
                elemToMove = tempResult[j];
                rotateResult.push(elemToMove);
            }
        }
        tempResult = rotateResult;
        rotateResult = [];
    }
    console.log(tempResult.join(' '));

}

rotateArray(['1', '2', '3', '4', '2']);