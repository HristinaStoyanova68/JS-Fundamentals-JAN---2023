function integerorFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let typeOfNum = "";
    if (sum % 1 === 0) {
        typeOfNum = "Integer";
    } else {
        typeOfNum = "Float";
    }

    console.log(`${sum} - ${typeOfNum}`);

}

integerorFloat(9, 100, 1.1);