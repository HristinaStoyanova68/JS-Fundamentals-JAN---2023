function valueOfAString(input) {

    let string = input[0].split('');
    let command = input[1];
    let sum = 0;

    for (const char of string) {
        let numOfChar = char.charCodeAt();

        if (command === 'LOWERCASE') {

            if (numOfChar >= 97 && numOfChar <= 122) {
                sum += numOfChar;
            }
        } else if (command === 'UPPERCASE') {

            if (numOfChar >= 65 && numOfChar <= 90) {
                sum += numOfChar;
            }
        }
    }

    console.log(`The total sum is: ${sum}`);
}

valueOfAString(['HelloFromMyAwesomePROGRAM',

    'LOWERCASE']);
console.log('............');
valueOfAString(['AC/DC',

    'UPPERCASE']);