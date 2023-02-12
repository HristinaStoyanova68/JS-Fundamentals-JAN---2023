function movingTarget(input) {

    let targets = input
        .shift()
        .split(' ')
        .map(x => Number(x));

    let currLine = input.shift();

    while (currLine !== 'End') {
        let comands = currLine.split(' ');
        let currCommand = comands[0];
        let index = Number(comands[1]);
        let amount = Number(comands[2]);

        switch (currCommand) {
            case 'Shoot':

                if (targets[index]) {
                    targets[index] -= amount;
                    if (targets[index] <= 0) {
                        targets.splice(index, 1);
                    }
                }

                break;
            case 'Add':
                // if (targets[index]) {
                //     targets.splice(index, 0, amount);
                // }
                if (index >= 0 && index < targets.length) {
                    targets.splice(index, 0, amount);
                } else {
                    console.log("Invalid placement!");
                }
                break;
            case 'Strike':
                let radius = amount;
                let lowerIndex = index - radius;
                let upperIndex = index + radius;

                if (targets[lowerIndex] && targets[upperIndex]) {
                    targets.splice(lowerIndex, radius * 2 + 1);
                } else {
                    console.log("Strike missed!");
                }
                break;
        }
        currLine = input.shift();
    }
    console.log(targets.join('|'));
}

movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Add 2 3",
    "Add 22 3",
    "Strike 2 1",
    "Add 2 3",
    "End"]);

movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);