function santasGifts(input) {

    let numOfCommands = Number(input.shift());
    let houses = input.shift().split(' ');

    let santaPositions = 0;

    for (let i = 0; i < numOfCommands; i++) {

        let [command, ...tokens] = input[i].split(' ');

        if (command === 'Forward') {

            let numberOfSteps = Number(tokens[0]);
            let index = santaPositions + numberOfSteps;

            if (index >= 0 && index < houses.length) {
                houses.splice(index, 1);
                santaPositions = index;
            }

        } else if (command === 'Back') {
            let numberOfSteps = Number(tokens[0]);
            let index = santaPositions - numberOfSteps;
            if (index >= 0 && index < houses.length) {

                houses.splice(index, 1);
                santaPositions = index;
            }

        } else if (command === 'Gift') {
            let index = Number(tokens[0]);
            let houseNumber = tokens[1];

            if (index >= 0 && index < houses.length) {

                houses.splice(index, 0, houseNumber);
                santaPositions = index;
            }

        } else if (command === 'Swap') {
            let indexOfFirst = houses.indexOf(tokens[0]);
            let indexOfSecond = houses.indexOf(tokens[1]);

            if (indexOfFirst !== -1 && indexOfSecond !== - 1) {
                let temp = houses[indexOfFirst];
                houses[indexOfFirst] = houses[indexOfSecond];
                houses[indexOfSecond] = temp;
            }
        }
    }

    console.log(`Position: ${santaPositions}`);

    console.log(houses.join(', '));
}



santasGifts(['5',
    '255 500 54 78 98 24 30 47 69 58',
    'Forward 1',
    'Swap 54 47',
    'Gift 1 20',
    'Back 1',
    'Forward 3']);
console.log('.............');
santasGifts(['6',
    '50 40 25 63 78 54 66 77 24 87',
    'Forward 4',
    'Back 3',
    'Forward 3',
    'Gift 2 88',
    'Swap 50 87',
    'Forward 1']);