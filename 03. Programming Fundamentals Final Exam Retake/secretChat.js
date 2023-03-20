function secretChat(input) {

    let message = input.shift();

    let command = input.shift();

    while (command !== 'Reveal') {

        let [currCommand, data1, data2] = command.split(':|:');

        switch (currCommand) {
            case 'InsertSpace':
               
                let index = Number(data1);
                message = message.split('')
                message.splice(index, 0, ' ');
                console.log(message.join(''));
                break;
            case 'Reverse':
                let substring = data1;

                if (message.includes(substring)) {
                    let strartIndex = message.indexOf(substring);

                    let newSubstring = substring.split('').reverse()
                    message = message.split('');
                    message.splice(strartIndex, substring.length);
                    message.push(...newSubstring);
                    message = message.join('');
                    
                    console.log(message);

                } else {
                    console.log('error');
                }

                break;
            case 'ChangeAll':

            while (message.includes(data1)) {
                let newMessage = message.replace(data1, data2);
                message = newMessage;
            }
                console.log(message);
                break;
            default:
                console.log('error');
        }

        if (typeof message !== 'string') {
            
            message = message.join('');
        }

        command = input.shift();
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