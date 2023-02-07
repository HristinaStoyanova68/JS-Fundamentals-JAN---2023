function removeTheLastCountOfElemFromArr(array, count) {
    let newArray = [];
    let removedElemArray = [];
    let allElemArray = [];
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
            let currElem = array[i];
            if (i >= arrayLength - count) {
                removedElemArray.push(currElem);
            } else {
                    newArray.push(currElem);
            }
    }
    allElemArray.push(newArray);
    allElemArray.push(removedElemArray);
    return allElemArray;
}
console.log(removeTheLastCountOfElemFromArr(["Gold", "Silver", "Bronze", "Medallion", "Cup"], 2));