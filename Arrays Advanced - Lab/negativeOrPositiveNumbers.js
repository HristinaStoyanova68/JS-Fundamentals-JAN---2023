function negativeOrPositiveNumbers(array) {

    let newArray = [];

    for (let num of array) {

        if (num < 0) {
            newArray.unshift(num);
        } else {
            newArray.push(num);
        }
    }
    console.log(newArray.join('\n'));

}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);
console.log('...................');
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);