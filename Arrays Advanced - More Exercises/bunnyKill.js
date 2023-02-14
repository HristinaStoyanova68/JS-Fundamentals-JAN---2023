function bunnyKill(input) {

    let bombCells = input.pop().split(' ').map(str => str.split(',').map(Number));
    let matrix = input.map(row => row.split(' ').map(Number));

    let bombDamage = 0;
    let killedBunnies = 0;

    for (let i = 0; i < bombCells.length; i++) {
        let bombRow = bombCells[i][0];
        let bombCol = bombCells[i][1];
        let bombValue = matrix[bombRow][bombCol];

        if (bombValue <= 0) {
            continue;
        }
        let startRow = Math.max(0, bombRow - 1);
        let endRow = Math.min(bombRow + 1, matrix.length - 1);

        for (let row = startRow; row <= endRow; row++) {
            let startCol = Math.max(0, bombCol - 1);
            let endCol = Math.min(bombCol + 1, matrix[row].length - 1);
            for (let col = startCol; col <= endCol; col++) {
                matrix[row][col] -= bombValue;
            }
        }
        killedBunnies++;
        bombDamage += bombValue;
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > 0) {
                bombDamage += matrix[row][col];
                killedBunnies++;
            }
        }
    }
    console.log(bombDamage);
    console.log(killedBunnies);
}

bunnyKill([
    '5 10 15 20',

    '10 10 10 10',

    '10 15 10 10',

    '10 10 10 10',

    '2,2 0,1']);
console.log('..................');;
bunnyKill([
    '10 10 10',

    '10 10 10',

    '10 10 10',

    '0,0']);