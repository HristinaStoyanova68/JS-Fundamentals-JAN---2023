function sumFirstAndLastArrayElements(input) {
    let firstNum = Number(input[0]);
    let lastNum = Number(input[input.length - 1]);
    let sum = firstNum + lastNum;
    console.log(sum);

}

sumFirstAndLastArrayElements([11, 58, 69]);