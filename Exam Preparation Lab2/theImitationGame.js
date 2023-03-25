function theImitationGame(input) {

    let message = input.shift();

    while (input.length > 0) {
        let [command, ...tokens] = input.shift().split('|');

        if (command === 'ChangeAll') {
            let substring = tokens[0];
            let replacement = tokens[1];
            message = message.split(substring).join(replacement);
        } else if (command === 'Insert') {
            let index = Number(tokens[0]);
            let value = tokens[1];
            message = message.split('');
            message.splice(index, 0, value);
            message = message.join('');
        } else if (command === 'Move') {
            let numOfLetters = Number(tokens[0]);
            message = message.split('');
            let letters = message.splice(0, numOfLetters);
            message.push(...letters);
            message = message.join('');

        } else if (command === 'Decode') {
            console.log(`The decrypted message is: ${message}`);
        }
    }
}

// theImitationGame([
//     'zzHe',
//     'ChangeAll|z|l',
//     'Insert|2|o',
//     'Move|3',
//     'Decode'
// ]);
// console.log('...............');
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode']);