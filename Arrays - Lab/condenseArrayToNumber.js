function condenseArrayToNumber(array) {

    let tempArray = array;

    while (tempArray.length > 1) {
        let newArray = [];
        for (let i = 0; i < tempArray.length - 1; i++) {
            let firstElement = tempArray[i];
            let secondElement = tempArray[i + 1];
            newArray.push(firstElement + secondElement);
        }
        tempArray = newArray;
    }
    console.log(tempArray[0]);

}

condenseArrayToNumber([1]);