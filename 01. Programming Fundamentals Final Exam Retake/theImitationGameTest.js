function theImitationGameTest(input) {

    let decodingString = input.slice(0, 1)[0];

    for (const line of input.slice(1)) {
        let [command, index, value] = line.split('|');

        if (command === 'Decode') {
            console.log(`The decrypted message is: ${decodingString}`);
            break;
        } else {
            switch (command) {
                case 'ChangeAll':
                    changeAll(index, value);
                    break;
                case 'Insert':
                    insert(index, value)
                    break;
                case 'Move':
                    move(index);
                    break;
                default:
                    break;
            }
        }
    }

    function changeAll(substring, replacement) {

        while (decodingString.includes(substring)) {
            decodingString = decodingString.replace(substring, replacement);
        }
    }

    function insert(index, value) {

        let validation = Number(index) >= 0 && Number(index) <= decodingString.length;

        if (validation) {
            let newString = decodingString.split('');
            newString.splice(+index, 0, value);
            decodingString = newString.join('');
        }
    }

    function move(indexEnd) {
        let validation = Number(indexEnd) >= 0 && Number(indexEnd) <= decodingString.length;

        if (validation) {
            let newString = decodingString.split('');
            newString = [...newString.slice(+indexEnd), ...newString.slice(0, +indexEnd)];
            decodingString = newString.join('');
        }
    }
}

theImitationGameTest([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]
);
console.log('............');
theImitationGameTest([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]
);
