function negativeOrPositiveNumbers(array) {

    let newArray = [];

    for (let elem of array) {
        let num = Number(elem);

        if (num < 0) {
            newArray.unshift(num);
        } else {
            newArray.push(num);
        }
    }
    for (let number of newArray) {
        console.log(number);
    }

}
negativeOrPositiveNumbers(['7', '-2', '8', '9']);
console.log('...................');
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);