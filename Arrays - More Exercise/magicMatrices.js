function magicMatrices(input) {

    let magicSum = 0;

    //calculate magic sum
    let initialArray = input[0];

    for (let i = 0; i < initialArray.length; i++) {
        let currNum = initialArray[i];
        magicSum += Number(currNum);
    }

    let isMagic = true;
    let inputLength = input.length;
    
    for (let i = 0; i < inputLength; i++) {
        let currRow = input[i];
        let currRowLength = currRow.length;
        let rowSum = 0;
        let columnSum = 0;

        //check row sum 

        for (let j = 0; j < currRowLength; j++) {
            let currRowNum = currRow[j];
            rowSum += Number(currRowNum);
        }

        //check column sum
        for (let k = 0; k < inputLength; k++) {
            let currRow = input[k];
            let currColNum = currRow[i];
            columnSum += currColNum;
        }

        if (rowSum !== magicSum || columnSum !== magicSum) {
            isMagic = false;
            break;
        }
    }
    console.log(isMagic);

}

magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]

);