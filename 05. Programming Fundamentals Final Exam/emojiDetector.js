function emojiDetector(input) {

    let numbersPattern = /(?<matchedNumbers>\d+)/g;

    let coolThreshold = '';

    let matched = numbersPattern.exec(input);

    while (matched !== null) {
        coolThreshold += matched.groups['matchedNumbers'];
        matched = numbersPattern.exec(input);

    }
    coolThreshold = coolThreshold.split('').reduce((a, b) => Number(a) * Number(b));
    console.log(`Cool threshold: ${coolThreshold}`);

    let emojiPattern = /([:]{2}|[\*]{2})(?<emoji>[A-Z][a-z]{2,})\1/g;

    let matchedEmojiAsArr = [];
    let matchedEmojiWithSymbols = [];

    let matchedEmoji = emojiPattern.exec(input[0]);

    while (matchedEmoji !== null) {

        matchedEmojiAsArr.push(matchedEmoji.groups['emoji']);
        matchedEmojiWithSymbols.push(matchedEmoji[0]);
        matchedEmoji = emojiPattern.exec(input[0]);
    }
    let countOfMatched = matchedEmojiAsArr.length;

    console.log(`${countOfMatched} emojis found in the text. The cool ones are:`);

    for (const emoji of matchedEmojiAsArr) {
        let emojiSum = 0;
        for (let i = 0; i < emoji.length; i++) {

            emojiSum += emoji.charCodeAt(i);
        }

        if (emojiSum > coolThreshold) {

            for (const line of matchedEmojiWithSymbols) {

                if (line.includes(emoji)) {

                    console.log(line);
                    break;
                }
            }
        }
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
console.log('..............');
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);
console.log('..............');
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);