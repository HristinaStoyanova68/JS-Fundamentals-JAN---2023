function arraysValueAndArraysElementsCounts(array) {
    let arrayLength = array.length;
    let arrayValue = 0;
    let count = 0;
    let integersFolCalculating = [];

    for (let i = 0; i < arrayLength; i++) {
            count++;
            let cuurElem = array[i];
            let currElemLength = cuurElem.length;
          
            arrayValue += currElemLength;

    }
    integersFolCalculating.push(arrayValue);
    integersFolCalculating.push(count);
    return integersFolCalculating;

}
console.log(arraysValueAndArraysElementsCounts(["Gold", "Silver", "Bronze", "Medallion", "Cup"]));