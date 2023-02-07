function compareArraysValues(arr1, arr2) {

    let arr1Length = arr1.length;
    let arr2Length = arr2.length;
    let newArr = [];

    for (let i = 0; i < arr2Length; i++) {
        let element = arr2[i];
        let isIncludes = true;
        for (let item of arr1) {

            if (element !== item) {
                isIncludes = false;
            } else {
                isIncludes = true;
                break;
            }

        }
        if (isIncludes === false) {
            newArr.unshift(element);
        }
    }
    for (let i = 0; i < arr1Length; i++) {
        newArr.push(arr1[i]);
    }
    return newArr;

}

console.log(compareArraysValues(
    ["Gold", "Silver", "Bronze", "Medallion", "Cup"],
    ["Wood", "Gold", "Coins"]));