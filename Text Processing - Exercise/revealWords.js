function revealWords(words, text) {

    text = ` ${text} `;

    const wordsArray = words.split(', ');

    wordsArray.forEach(word => {
        const match = ` ${'*'.repeat(word.length)} `;
        text = text.replace(match, ` ${word} `);
    });

    console.log(text.trim());
}

revealWords(
    'great',
    'softuni is ***** place for learning new programming languages');
console.log('...........');
revealWords(
    'great, learning',
    'softuni is ***** place for ******** new programming languages');