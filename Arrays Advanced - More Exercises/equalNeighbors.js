function equalNeighbors(row) {

    let rowLength = row.length - 1;
    let result = 0;
    for (let i = 0; i <= rowLength; i++) {
        let currRow = row[i];
        let compareRow = row[i + 1];
        let currRowLength = currRow.length - 1;
        for (let j = 0; j <= currRowLength - 1; j++) {
            let currRowElem = currRow[j];
            let compareRowElem = currRow[j + 1];
            if (currRowElem === compareRowElem) {
                result++;
            }
        }
        if (i === rowLength) {
            break;
        }
        for (let k = 0; k <= currRowLength; k++) {
            let currColElem = currRow[k];
            let compareColElem = compareRow[k];
            if (currColElem === compareColElem) {
                result++;
            }

        }
    }
    console.log(result);
}

equalNeighbors([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]
);