function emojiDetector(input) {

    let emojiPattern = /(:{2}|\*{2})([A-Z][a-z]{2,})\1/g;
    let numbersPattern = /\d/g;

    let matchedEmoji = input[0].match(emojiPattern);
    let matchedNumbers = input[0].match(numbersPattern);
    let coolThresholdSum = matchedNumbers.map(Number).reduce((a, b) => a * b);

    console.log(`Cool threshold: ${coolThresholdSum}`);
    console.log(`${matchedEmoji.length} emojis found in the text. The cool ones are:`);

    for (let emojiLine of matchedEmoji) {
        let emoji = emojiLine.substring(2, emojiLine.length - 2);
        let emojiAsArr = emoji.split('');
        let emojiSum = 0;
        for (let i = 0; i < emojiAsArr.length; i++) {
            emojiSum += emojiAsArr[i].charCodeAt();
        }
        if (emojiSum > coolThresholdSum) {
            console.log(emojiLine);
        }
    }
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
console.log('..............');
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
console.log('............');
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);