function wordsTrackerWithMap(input) {

    let wordsAsObj = new Map();

    let words = input.shift().split(' ');

    for (const word of words) {
        wordsAsObj.set(word, 0);
    }

    for (const word of input) {
        if (wordsAsObj.has(word)) {
            wordsAsObj.set(word, wordsAsObj.get(word) + 1);
        }
    }

    let sorted = Array.from(wordsAsObj).sort((a, b) => b[1] - a[1]);

    for (const [word, count] of sorted) {
        console.log(`${word} - ${count}`);
    }
}

wordsTrackerWithMap([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);
console.log('...............');
wordsTrackerWithMap([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']);