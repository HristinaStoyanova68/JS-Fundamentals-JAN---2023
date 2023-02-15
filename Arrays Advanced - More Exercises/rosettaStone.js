function rosettaStone(input) {

    let templateMatrixLength = Number(input.shift());
    let templateMatrix = [];

    for (let row = 0; row < templateMatrixLength; row++) {
        templateMatrix.push(input[row].split(' ').map(Number));
    }
    //console.log(templateMatrixLength);
    //console.log(templateMatrix);

    let rosettaMatrix = [];


    for (let row = templateMatrixLength; row < input.length; row++) {
        rosettaMatrix.push(input[row].split(' ').map(Number));
    }
    // console.log(rosettaMatrix);
    // console.log(input.length);

    let decodingMatrix = rosettaMatrix.slice(0);
    let templateColLength = templateMatrix[0].length;

    for (let row = 0; row < rosettaMatrix.length; row++) {
        let currRowLength = rosettaMatrix[row].length;
        for (let col = 0; col < currRowLength; col++) {
            let valueRosettaMatrix = rosettaMatrix[row][col];
            let valueTemplateMatrix = templateMatrix[row % templateMatrixLength][col % templateColLength];
            let total = valueRosettaMatrix + valueTemplateMatrix;
            decodingMatrix[row][col] = total;
        }
    }
    // console.log(decodingMatrix);
    for (let row = 0; row < decodingMatrix.length; row++) {
        let currRowLength = decodingMatrix[row].length;
        for (let col = 0; col < currRowLength; col++) {
            let num = decodingMatrix[row][col];
            let letterNum = num % 27;
            if (letterNum === 0) {
                decodingMatrix[row][col] = ' ';
            } else {
                let letterNumFromAscii = letterNum + 64;
                decodingMatrix[row][col] = String.fromCharCode(letterNumFromAscii);
            }

        }
    }
    //console.log(decodingMatrix);
    let decodingText = '';
    for (let i = 0; i < decodingMatrix.length; i++) {
        //let currElem = decodingMatrix[i];
        decodingText += decodingMatrix[i].join('');
    }
    console.log(decodingText);
}

rosettaStone(['2',

    '59 36',

    '82 52',

    '4 18 25 19 8',

    '4 2 8 2 18',

    '23 14 22 0 22',

    '2 17 13 19 20',

    '0 9 0 22 22']);
console.log('...............');
rosettaStone(['2',

    '31 32',

    '74 37',

    '19 0 23 25',

    '22 3 12 17',

    '5 9 23 11',

    '12 18 10 22']);
