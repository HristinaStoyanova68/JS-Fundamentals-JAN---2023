function integerAndFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let type = 'Float';
    if (Number.isInteger(sum)) {
        type = 'Integer';
    }
    console.log(`${sum} - ${type}`);

}

integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);
integerAndFloat(25.3, 22, 13);