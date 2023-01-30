function diagonalAttack(input) {

    let matrix = [];
    let inputLength = input.length;
    

    for (let i = 0; i < inputLength; i++) {
        let matrixString = input[i];
        let matrixStringLength = matrixString.length;
        let matrixArray = [];
        let storage = '';

        for (let j = 0; j < matrixStringLength; j++) {
            let currNum = matrixString[j];

            if (currNum !== ' ') {
                storage += currNum;
            } 
            if (currNum === ' ' || j === matrixStringLength - 1) {
                matrixArray.push(Number(storage));
                storage = '';
            }
            }
        matrix.push(matrixArray);
        }
    //console.log(matrix);
   
    let sum1 = 0;
    let sum2 = 0;
    let startCol = 0;
    let endCol = inputLength - 1;

    let matrixLength = matrix.length;

        for (let i = 0; i < matrixLength; i++) {
            sum1 += Number(matrix[i][startCol]);
            sum2 += Number(matrix[i][endCol]);
            startCol++;
            endCol--;
        }
        //console.log(sum1);
        //console.log(sum2);

        if (sum1 === sum2) {
            
            for (let i = 0; i < matrixLength; i++) {
                let currArray = matrix[i];
                let currArrayLength = currArray.length;
                let newMatrix = [];
                for (let j = 0; j < currArrayLength; j++) {
                    let currNumber = currArray[j];
                    if (j === i || j === (currArrayLength - 1) - i) {
                        newMatrix.push(currNumber);
                    } else {
                        newMatrix.push(sum1);
                    }
                }
                console.log(newMatrix.join(' '));
            }
            
        } else {
            for (let i = 0; i < matrixLength; i++) {
                let currArray = matrix[i];
                console.log(currArray.join(' '));
            }
        }

    }

diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']

);