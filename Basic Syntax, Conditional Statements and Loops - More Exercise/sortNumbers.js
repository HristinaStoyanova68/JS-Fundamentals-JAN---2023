function solve(num1, num2, num3) {
    let firstRow = Number.MIN_SAFE_INTEGER;
    let secondRow = 0;
    let thirdRow = 0;
    let changingRow = 0;

    if (num1 > firstRow) {
        firstRow = num1;
        secondRow = num2;
        thirdRow = num3;
    }
    if (num2 > firstRow) {
        firstRow = num2;
        secondRow = num1;
        thirdRow = num3;
    }
    if (num3 > firstRow) {
        firstRow = num3;
        secondRow = num1;
        thirdRow = num2;
    }
    if (thirdRow > secondRow) {
        changingRow = secondRow;
        secondRow = thirdRow;
        thirdRow = changingRow;
    }
    console.log(firstRow);
    console.log(secondRow);
    console.log(thirdRow);


}

solve(0, 0, 2);