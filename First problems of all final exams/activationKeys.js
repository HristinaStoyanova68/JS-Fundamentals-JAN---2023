function activationKeys(input) {

    let activationKey = input.shift();
    let index = 0;
    let commandsLine = input[index];

    while (commandsLine !== 'Generate') {
        let [command, ...tokens] = commandsLine.split('>>>');

        if (command === 'Contains') {
            let substring = tokens[0];

            if (activationKey.includes(substring)) {
                console.log(`${activationKey} contains ${substring}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (command === 'Flip') {
            let caseCommand = tokens[0];
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);

            let newString = upperOrLower(caseCommand, activationKey, startIndex, endIndex);
            activationKey = newString;

            console.log(activationKey);
        } else if (command === 'Slice') {
            let startIndex = Number(tokens[0]);
            let endIndex = Number(tokens[1]);
            let newString = activationKey.split('');
            newString.splice(startIndex, endIndex - startIndex);
            activationKey = newString.join('');

            console.log(activationKey);
        }

        index++;
        commandsLine = input[index];
    }

    console.log(`Your activation key is: ${activationKey}`);

    function upperOrLower(command, str, startIndex, endIndex) {

        if (command === 'Upper') {
            let text = str.substring(startIndex, endIndex);
            let replacement = text.toUpperCase();
            str = str.replace(text, replacement);
        } else if (command === 'Lower') {
            let text = str.substring(startIndex, endIndex);
            let replacement = text.toLowerCase();
            str = str.replace(text, replacement);
        }
        return str;
    }
}

activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);
console.log('.............');
activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]);