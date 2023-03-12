function findBinaryNumber(number, binaryNumber) {
    let binaryValue = [];
    let count = 0;

    while (number / 2 !== 0) {

        let remainder = number % 2;

        binaryValue.unshift(remainder);

        if (remainder === binaryNumber) {
            count++;
        }

        number = Math.trunc(number / 2);
    }

    console.log(count);

}

findBinaryNumber(10, 0);