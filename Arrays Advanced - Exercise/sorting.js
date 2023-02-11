function sorting(input) {

    let maxToMinArray = [];

    while (input.length !== 0) {
        let maxNum = Number.MIN_SAFE_INTEGER;
        for (let currNum of input) {
            if (currNum > maxNum) {
                maxNum = currNum;
            }
        }
        maxToMinArray.push(maxNum);
        let index = input.indexOf(maxNum);
        input.splice(index, 1);
    }
    let result = [];

    for (let i = 0; i < maxToMinArray.length / 2; i++) {
        result.push(maxToMinArray[i]);
        result.push(maxToMinArray[(maxToMinArray.length - 1) - i]);
    }
    console.log(result.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
console.log('.....................');
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);

//94 1 69 2 63 3 52 18 31 21