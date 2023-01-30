function spiralMatrix(row, col) {

    let matrix = [];
    let count = 1;
    let startRow = 0;
    let endRow = row - 1;
    let startCol = 0;
    let endCol = col - 1;

    for (let i = 0; i < row; i++) {
        matrix.push([]);
    }

    while (startCol <= endCol && startRow <= endRow) {

        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = count;
            count++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endCol] = count;
            count++;
        }
        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            matrix[endRow][i] = count;
            count++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            matrix[i][startCol] = count;
            count++;
        }
        startCol++;

    }
    for (let i = 0; i < row; i++) {
        let newMatrix = matrix[i];
        console.log(newMatrix.join(' '));
    }
}

spiralMatrix(3, 3);