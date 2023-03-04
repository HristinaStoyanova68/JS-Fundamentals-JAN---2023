function wordOccurrences(input) {

    let words = new Map();

    for (const word of input) {
        let count = 0;
        if (words.has(word)) {
            count = words.get(word);
            words.set(word, count + 1);
        } else {
            count = 1;
            words.set(word, count);
        }
    }

    let sorted = Array.from(words).sort((a, b) => b[1] - a[1]);

    for (const [word, count] of sorted) {
        console.log(`${word} -> ${count} times`);
    }
}

wordOccurrences([
    "Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"]);
console.log('.............');


wordOccurrences([
    "dog", "bye", "city", "dog", "dad",
    "boys", "ginger"]);
