function activationKeys(input) {

    let activationKey = input.shift();

    let commandLine = input.shift();

    while (commandLine !== 'Generate') {

        let [command, token1, token2, token3] = commandLine.split('>>>');

        if (command === 'Contains') {

            let substring = token1;

            if (activationKey.includes(substring)) {

                console.log(`${activationKey} contains ${substring}`);
            } else {

                console.log('Substring not found!');
            }
        } else if (command === 'Flip') {

            let upperOrLower = token1;
            let startIndex = Number(token2);
            let endIndex = Number(token3);
            let substring = activationKey.substring(startIndex, endIndex);

            if (upperOrLower === 'Upper') {

                activationKey = activationKey.replace(substring, substring.toUpperCase());

            } else if (upperOrLower === 'Lower') {

                activationKey = activationKey.replace(substring, substring.toLowerCase());
            }

            console.log(activationKey);

        } else if (command === 'Slice') {

            let startIndex = Number(token1);
            let endIndex = Number(token2) - startIndex;

            activationKey = activationKey.split('');
            activationKey.splice(startIndex, endIndex)
            activationKey = activationKey.join('');

            console.log(activationKey);
        }

        commandLine = input.shift();
    }

    console.log(`Your activation key is: ${activationKey}`);
}

activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
    ;
console.log('..............');
activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])
    ;