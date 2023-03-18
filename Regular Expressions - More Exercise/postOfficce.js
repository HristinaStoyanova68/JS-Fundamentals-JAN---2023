function postOfficce(input) {

    input = input.join('');
    let data = input.split('|');

    let capitalLettersPattern = /(["#\$%\&*])(?<capitalLetters>[A-Z]+)\1/g;
    let capitalLetters = data[0].match(capitalLettersPattern)[0];
    // let capitalLetters = capitalLettersData.groups['capitalLetters'];

    let wordDataPattern = /(?<firstLetterNumber>\d+):(?<wordLength>\d{1,20}\d{1,20})/g;
    let wordDataAsObject = new Map();

    for (const letter of capitalLetters) {
        wordDataAsObject.set(letter, 0);
    }

    let myLetters = [];

    let wordsData = data[1].match(wordDataPattern);
    for (const wordData of wordsData) {
        let [firstLettNum, wordLength] = wordData.split(':').map(Number);
        let currLetter = String.fromCharCode(firstLettNum);
        if (!myLetters.includes(currLetter)) {
            myLetters.push(currLetter);
        } else {
            continue;
        }

        if (wordDataAsObject.has(currLetter)) {

            wordDataAsObject.set(currLetter, wordLength + 1);
        }
    }

    let words = data[2].split(' ');

    for (let letter of capitalLetters) {

        for (let word of words) {

            if (letter === word[0] && word.length === wordDataAsObject.get(letter)) {
                console.log(word);
            }
        }
    }
}

postOfficce(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds 84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos']);
console.log('...........');
postOfficce(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig']);