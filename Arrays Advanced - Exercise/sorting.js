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
    while (maxToMinArray.length !== 0) {
        let bigNum = 0;
        let smallNum = 0;

        for (let i = 0; i < maxToMinArray.length; i++) {
            bigNum = maxToMinArray[i]
            result.push(bigNum);
            break;
        }
        if (maxToMinArray.length === 1) {
            let i = maxToMinArray.indexOf(bigNum);
            maxToMinArray.splice(i, 1);
        } else {
            for (let i = 0; i < maxToMinArray.length; i++) {
                smallNum = maxToMinArray[maxToMinArray.length - 1]
                result.push(smallNum);
                break;
            }
            let index = maxToMinArray.indexOf(bigNum);
            maxToMinArray.splice(index, 1);
            index = maxToMinArray.indexOf(smallNum);
            maxToMinArray.splice(index, 1);
        }
    }
    console.log(result.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 43]);
console.log('.....................');
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);

//94 1 69 2 63 3 52 18 31 21