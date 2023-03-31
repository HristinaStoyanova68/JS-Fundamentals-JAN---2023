function secretChat(input) {

    let message = input.shift();

    let index = 0;
    let commandLine = input[index];

    while (commandLine !== 'Reveal') {

        let [command, ...tokens] = commandLine.split(':|:');

        if (command === 'InsertSpace') {
            let index = Number(tokens[0]);
            message = message.split('');
            message.splice(index, 0, ' ');
            message = message.join('');
            console.log(message);
        } else if (command === 'Reverse') {
            let substring = tokens[0];

            if (message.includes(substring)) {

                message = message.replace(substring, '');
                let reversed = substring.split('').reverse().join('');
                message += reversed
                console.log(message);
            } else {
                console.log('error');
            }
        } else if (command === 'ChangeAll') {
            let substring = tokens[0];
            let replacement = tokens[1];

            message = message.split(substring).join(replacement);
            
            console.log(message);
        }

        index++;
        commandLine = input[index];
    }
    console.log(`You have a new text message: ${message}`);
}

secretChat(['heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal']);
console.log('.............');
secretChat(['Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal']);

    //let index = message.indexOf(substring);
    // let reversed = substring.split('').reverse().join('');
    // message = message.split('');
    // message.splice(index, substring.length);
    // message.push(...reversed);
    // message = message.join('');

    // while (message.includes(substring)) {
    //     message = message.replace(substring, replacement);
    // }