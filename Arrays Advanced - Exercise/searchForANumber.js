function searchForANumber(arr1, arr2) {
    let countNum = Number(arr2[0]);
    let numOfSecondTaking = Number(arr2[1]);
    let numForSearch = Number(arr2[2]);

    let firstTaking = arr1.splice(0, countNum);
    firstTaking.splice(0, numOfSecondTaking);
    let count = 0;

    for (let number of firstTaking) {
        if (number === numForSearch) {
            count++;
        }
    }
    console.log(`Number ${numForSearch} occurs ${count} times.`);

}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
console.log('............');
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 9]);