function mergeArrays(array1, array2) {
    let tempArray1 = [];
    let tempArray2 = [];
    let elemArray1 = "";
    let elemArray2 = "";
    for (let i = 0; i < array1.length; i++) {
        if (i % 2 === 0) {
            elemArray1 = Number(array1[i]);

        } else {
            elemArray1 = array1[i];
        }
        tempArray1.push(elemArray1);
    }
    for (let i = 0; i < array2.length; i++) {
        if (i % 2 === 0) {
            elemArray2 = Number(array2[i]);
        } else {
            elemArray2 = array2[i];
        }
        tempArray2.push(elemArray2);
    }
    let thirdArray = [];
    for (let i = 0; i < tempArray1.length; i++) {
        let elemTempArray1 = tempArray1[i];
        for (let j = 0; j < tempArray2.length; j++) {
            let elemTempArray2 = tempArray2[j];
            if (i === j) {
                thirdArray.push(elemTempArray1 + elemTempArray2);
            }
        }
    }
    console.log(thirdArray.join(" - "));

}

mergeArrays(['13', '12312', '5', '77', '4'],

    ['22', '333', '5', '122', '44']);