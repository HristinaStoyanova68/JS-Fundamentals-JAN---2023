function airPollution(map, forces) {

    let mapAsMatrix = map.map(str => str.split(' ').map(Number));
    let forcesAsArr = forces.map(str => str.split(' '));

    for (let i = 0; i < forcesAsArr.length; i++) {
        let currForce = forcesAsArr[i];
        let force = currForce[0];
        let infoNum = Number(currForce[1]);
      

        if (force === 'breeze') {

            for (let row = 0; row < mapAsMatrix.length; row++) {
                for (let col = 0; col < mapAsMatrix.length; col++) {
                    if (infoNum === row) {
                        mapAsMatrix[row][col] -= 15;
                        if (mapAsMatrix[row][col] < 0) {
                            mapAsMatrix[row][col] = 0;
                        }
                    }
                }
            }
            

        } else if (force === 'gale') {

            for (let col = 0; col < mapAsMatrix.length; col++) {
                for (let row = 0; row < mapAsMatrix.length; row++) {
                    if (infoNum === col) {
                        mapAsMatrix[row][col] -= 20;
                        if (mapAsMatrix[row][col] < 0) {
                            mapAsMatrix[row][col] = 0;
                        }
                    }
                }
            }
            
        } else if (force === 'smog') {

            for (let row = 0; row < mapAsMatrix.length; row++) {
                for (let col = 0; col < mapAsMatrix.length; col++) {

                    mapAsMatrix[row][col] += infoNum;



                }

            }
          
        }
    }
    let isPolluted = false;

    let pollutedCells = [];

    for (let row = 0; row < mapAsMatrix.length; row++) {
        for (let col = 0; col < mapAsMatrix.length; col++) {
            if (mapAsMatrix[row][col] >= 50) {
                isPolluted = true;
                pollutedCells.push(`[${row}-${col}]`);
            }
        }
    }
    if (isPolluted) {
        console.log(`Polluted areas:`, pollutedCells.join(', '));
    } else {
        console.log("No polluted areas");
    }
   
}

airPollution(
    ['5 7 72 14 4',
        '41 35 37 27 33',
        '23 16 27 42 12',
        '2 20 28 39 14',
        '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25']);
console.log('...............');
airPollution(['5 7 3 28 32',

    '41 12 49 30 33',

    '3 16 20 42 12',

    '2 20 10 39 14',

    '7 34 4 27 24'],

    ['smog 11', 'gale 3', 'breeze 1',

        'smog 2']);
console.log('........................');
airPollution(['5 7 2 14 4',

    '21 14 2 5 3',

    '3 16 7 42 12',

    '2 20 8 39 14',

    '7 34 1 10 24'],

    ['breeze 1', 'gale 2', 'smog 35'])