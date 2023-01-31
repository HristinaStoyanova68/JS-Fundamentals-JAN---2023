function demoOrbit(input) {
    let column = Number(input[0]);
    let row = Number(input[1]);
    let rowStarIndex = Number(input[2]);
    let colStarIndex = Number(input[3]);
    let matrix = [];

    for (let i = 0; i < row; i++) {
        matrix.push([]);
    }

    let matrixLength = matrix.length;

    for (let matrixRow = 0; matrixRow < matrixLength; matrixRow++) {
        let currMatrixRow = matrix[matrixRow];

        for (let matrixCol = 0; matrixCol < column; matrixCol++) {

            let currMatrixCol = Math.max(Math.abs
                (matrixRow - rowStarIndex) + 1,
                Math.abs(matrixCol - colStarIndex) + 1);

            currMatrixRow.push(currMatrixCol)

        }

    }
    for (let row = 0; row < matrixLength; row++) {
        let currRow = matrix[row];
        console.log(currRow.join(' '));
    }
}

demoOrbit([4, 4, 3, 2]);