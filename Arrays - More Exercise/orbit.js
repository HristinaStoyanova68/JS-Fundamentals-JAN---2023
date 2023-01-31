function orbit(input) {
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
        for (let matrixCol = 0; matrixCol < column; matrixCol++) {
            matrix[matrixRow][matrixCol] = Math.max(Math.abs(matrixRow - rowStarIndex) + 1, Math.abs(matrixCol - colStarIndex) + 1);
        }
    }
    for (let row = 0; row < matrixLength; row++) {
        let currRow = matrix[row];
        console.log(currRow.join(' '));
    }
}

orbit([6, 6, 2, 1]);