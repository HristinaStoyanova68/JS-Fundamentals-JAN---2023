function secretChat(input) {

    let message = input.shift();

    let commandLine = input.shift();

    while (commandLine !== 'Reveal') {

        let [command, ...rest] = commandLine.split(':|:');

        if (command === 'InsertSpace') {

            let index = Number(rest[0]);
            message = message.split('');
            message.splice(index, 0, ' ');
            message = message.join('');

            console.log(message);

        } else if (command === 'Reverse') {

            if (message.includes(rest[0])) {

                message = message.replace(rest[0], '');

                let substring = rest[0].split('').reverse().join('');

                message += substring;

                console.log(message);

            } else {

                console.log('error');
            }

        } else if (command === 'ChangeAll') {

            message = message.split(rest[0]).join(rest[1]);
            console.log(message);
        }

        commandLine = input.shift();
    }

    console.log(`You have a new text message: ${message}`);
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]
);
console.log('.............');
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]
);
