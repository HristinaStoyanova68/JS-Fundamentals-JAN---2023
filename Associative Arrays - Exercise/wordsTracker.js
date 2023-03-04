function wordsTracker(input) {

    let wordsAsObj = {};
    let words = input.shift().split(' ');

    for (const word of words) {
        wordsAsObj[word] = 0;
    }

    for (const word of input) {
        if (wordsAsObj.hasOwnProperty(word)) {
            wordsAsObj[word] += 1;
        }
    }

    let sorted = Object.entries(wordsAsObj).sort((a, b) => b[1] - a[1]);

    for (const [word, counter] of sorted) {
        console.log(`${word} - ${counter}`);
    }
}

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);
console.log('...............');
wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']);