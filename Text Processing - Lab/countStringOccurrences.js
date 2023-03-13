function countStringOccurrences(text, word) {

    let tokens = text.split(' ');
    let counter = 0;

    for (const token of tokens) {
        if (token === word) {
            counter++;
        }
    }
    return counter;
}

console.log(countStringOccurrences('This is a word and it also is a sentence', 'is'));
console.log('..........');
console.log(countStringOccurrences(
    'softuni is great place for learning new programming languages',
    'softuni'
));