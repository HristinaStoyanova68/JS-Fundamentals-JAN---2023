function movingTarget(input) {

    let targets = input.shift().split(' ').map(Number);
    //console.log(targets);
    let index = 0;
    let command = input[index];
    index++;

    while (command !== 'End') {
        
        let currCommand = command.split(' ')[0];
        let commandIndex = Number(command.split(' ')[1]);
        let commandValue = Number(command.split(' ')[2]);

        if (currCommand === 'Shoot') {
            if (commandIndex >= 0 && commandIndex < targets.length) {
                targets[commandIndex] -= commandValue;
                if (targets[commandIndex] <= 0) {
                    targets.splice(commandIndex, 1);
                }
            }

        } else if (currCommand === 'Add') {
            if (commandIndex >= 0 && commandIndex < targets.length) {
                targets.splice(commandIndex, 0, commandValue);
            } else {
            console.log("Invalid placement!");
            }       
                
            

        } else if (currCommand === 'Strike') {
            let startIndexForRemoving = commandIndex - commandValue;
            let endIndexForRemoving = commandIndex + commandValue;
            if (startIndexForRemoving < 0 || endIndexForRemoving > targets.length - 1) {
                console.log("Strike missed!");
            } else {
                targets.splice((commandIndex - commandValue), commandValue * 2 + 1);
            }

        }
        

        command = input[index];
        index++;
    }
    console.log(targets.join('|'));

}

// movingTarget(["52 74 23 44 96 110",
// "Shoot 5 10",
// "Shoot 1 80",

// "Strike 2 1",
// "Add 22 3",
// "End"])
// ;
console.log('...............');
movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])
;
// console.log('..............');
// movingTarget();