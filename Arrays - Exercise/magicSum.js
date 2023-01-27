function magicSum(array, num) {
    let number = Number(num);
    let magicSum = [];
    for (let i = 0; i < array.length; i++) {
        let num1 = array[i];
        for (let j = i + 1; j < array.length; j++) {
            let num2 = array[j];
            let sum = num1 + num2;
            if (sum === number) {
                magicSum.push(num1);
                magicSum.push(num2);
                console.log(magicSum.join(" "));
                magicSum = [];
            } else {
                continue;
            }
        }
    }

}

magicSum([1, 7, 6, 2, 19, 23],

    8);