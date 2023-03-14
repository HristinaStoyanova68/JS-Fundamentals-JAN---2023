function passwordGenerator(input) {

    let concatenatedstrings = (input[0] + input[1]).split('');
    let symbolsWord = input.pop().split('');
    let counter = 0;

    for (let i = 0; i < concatenatedstrings.length; i++) {
        let char = concatenatedstrings[i];
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            for (let j = counter; j < symbolsWord.length; j++) {
                let symbolToUpper = symbolsWord[j].toUpperCase();
                concatenatedstrings[i] = symbolToUpper;
                counter++;
                if (counter === symbolsWord.length) {
                    counter = 0;
                }
                break;
            }
        }
    }

    console.log(`Your generated password is ${concatenatedstrings.reverse().join('')}`);
}

passwordGenerator([
    'ilovepizza',
    'ihatevegetables',
    'orange']);
console.log('.........');
passwordGenerator([
    'easymoneyeazylife',
    'atleasttencharacters',
    'absolute']);
console.log('.........');
passwordGenerator([
    'areyousureaboutthisone',
    'notquitebutitrustyou',
    'disturbed']);