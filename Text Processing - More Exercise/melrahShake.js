function melrahShake(input) {

    let string = input[0];
    let pattern = input[1];

    while (pattern.length > 0) {

        let firstMatch = string.indexOf(pattern);
        let lastMatch = string.lastIndexOf(pattern);

        if ((firstMatch > -1 && lastMatch > -1) && firstMatch !== lastMatch) {

            string = string.split('');
            string.splice(firstMatch, pattern.length);
            string = string.join('');
            lastMatch = string.lastIndexOf(pattern);
            string = string.split('');
            string.splice(lastMatch, pattern.length);
            string = string.join('');

            let removeFromPattern = pattern[Math.floor(pattern.length / 2)];
            pattern = pattern.replace(removeFromPattern, '');

            console.log('Shaked it.');

        } else {
            break;
        }
    }
    console.log('No shake.');
    console.log(string);
}
melrahShake(['astalavista baby',

    'sta']);
console.log('..........');
melrahShake(['##mtm!!mm.mm*mtm.#',

    'mtm']);