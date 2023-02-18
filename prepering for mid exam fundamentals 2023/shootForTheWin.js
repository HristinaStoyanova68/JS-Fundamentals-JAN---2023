function shootForTheWin(input) {

    let sequence = input.shift().split(' ').map(Number);
    //console.log(sequence);
    let index = 0;
    let indexShot = input[index];
    index++;

    let countShots = 0;

    while (indexShot !== 'End') {
        let currIndex = Number(indexShot);
        if (currIndex >= 0 && currIndex < sequence.length) {
            countShots++;
            let targetValue = sequence[currIndex];
            for (let i = 0; i < sequence.length; i++) {

                if (sequence[i] !== -1) {

                    if (i === currIndex) {
                        sequence[i] = -1;
                        continue;
                    }
                    if (sequence[i] > targetValue) {
                        sequence[i] -= targetValue;

                    } else {
                        sequence[i] += targetValue;
                    }
                }
            }
        }
        indexShot = input[index];
        index++;
    }
    console.log(`Shot targets: ${countShots} -> ${sequence.join(' ')}`);

}

shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])
    ;
console.log('.............');
shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])
    ;