function nXNMatrix(num) {
    let matrix = [];

    for (let i = 0; i < num; i++) {
        matrix.push([]);
        for (let j = 0; j < num; j++) {
            matrix[i].push(num);
        }
    }
    for (let i = 0; i < num; i++) {
        let nXNmatrix = matrix[i];
        console.log(nXNmatrix.join(' '));
    }
    
}

nXNMatrix(7);