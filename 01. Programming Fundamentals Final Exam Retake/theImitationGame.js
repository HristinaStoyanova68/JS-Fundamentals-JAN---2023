function theImitationGame(input) {

    let codeString = input.shift().split('');
    let index = 0;
    let command = input[index];
    index++;

    while (command !== 'Decode') {
        command = command.split('|');
        let currCommand = command[0];

        if (currCommand === 'Move') {
            let numberOfMovingLetters = Number(command[1]);

            if (numberOfMovingLetters >= 0 && numberOfMovingLetters <= codeString.length) {
                
                let moviedLetters = codeString.splice(0, numberOfMovingLetters);
                codeString.push(...moviedLetters);

            }

        } else if (currCommand === 'Insert') {

            let insertIndex = Number(command[1]);
            let insertValue = command[2];

            if (insertIndex >= 0 && insertIndex < codeString.length) {

                codeString.splice(+insertIndex, 0, insertValue);
            } else {

                codeString.push(insertValue);
            }

        } else if (currCommand === 'ChangeAll') {

            let substring = command[1];
            let replacement = command[2];

            codeString = codeString.join('');

            while (codeString.includes(substring)) {
                codeString = codeString.replace(substring, replacement);
            }

            codeString = codeString.split('');

            // for (let i = 0; i < codeString.length; i++) {

            //     if (codeString[i] === substring) {
            //         codeString[i] = replacement;
            //     }
            // }
        } 

        command = input[index];
        index++;
    }

    console.log(`The decrypted message is: ${codeString.join('')}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]
);
console.log('............');
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]
);