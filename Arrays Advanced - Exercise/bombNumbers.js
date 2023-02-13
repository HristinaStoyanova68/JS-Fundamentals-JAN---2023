function bombNumbers(array1, array2) {

    let sequence = array1;
    let bomb = Number(array2[0]);
    let power = Number(array2[1]);


    while (sequence.includes(bomb)) {
        let index = sequence.indexOf(bomb);
        let elemToRemove = power * 2 + 1;
        let startIndex = index - power;
        if (startIndex < 0) {
            elemToRemove += startIndex;
            startIndex = 0;

        }
        sequence.splice(startIndex, elemToRemove);
    }
    let sum = 0;
    for (let currNum of sequence) {
        sum += currNum;
    }
    console.log(sum);

}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
console.log('................');
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
console.log('................');
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
console.log('................');
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
console.log('.............');
bombNumbers([1, 7, 2, 4, 2, 2, 7, 9], [7, 2]);
