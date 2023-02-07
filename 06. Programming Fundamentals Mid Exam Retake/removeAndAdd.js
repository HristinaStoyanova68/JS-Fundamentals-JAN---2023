function removeAndAdd(array, index) {
    let newArray = [];
    let arrayLength = array.length;
    let movingElem = '';
    for (let i = 0; i < arrayLength; i++) {
        let currElem = array[i];
        if (index === i) {
            movingElem += currElem;
        } else {
            newArray.push(currElem);
        }
    }
    newArray.push(movingElem);
    return newArray;
}
console.log(removeAndAdd(["Gold", "Silver", "Bronze", "Medallion", "Cup"], 2));