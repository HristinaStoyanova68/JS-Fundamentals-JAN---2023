function mirroWords(input) {

    let pattern = /([#@])(?<word1>[a-z]{3,})\1\1(?<word2>[a-z]{3,})\1/gi;

    let matchedPairsCount = input[0].match(pattern);

    if (matchedPairsCount === null) {

        console.log('No word pairs found!');
        console.log('No mirror words!');
        return;
    } else {

        console.log(`${matchedPairsCount.length} word pairs found!`);
    }

    let matchedPairs = pattern.exec(input[0]);

    let mirrorWords = new Map();

    while (matchedPairs !== null) {

        let word1 = matchedPairs.groups['word1'];
        let word2 = matchedPairs.groups['word2'];

        if (word1.length === word2.length) {

            let word2AsArr = word2.split('').reverse().join('');
            if (word1 === word2AsArr) {

                mirrorWords.set(word1, word2);
            }
        }

        matchedPairs = pattern.exec(input[0]);
    }

    if (mirrorWords.size === 0) {
        console.log('No mirror words!');
    } else {

        let mirroWordsAsArr = [];

        for (const element of mirrorWords) {

            mirroWordsAsArr.push(`${element[0]} <=> ${element[1]}`);
        }

        console.log(`The mirror words are:\n${mirroWordsAsArr.join(', ')}`);
    }
}

mirroWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]
);
console.log('............');
mirroWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
console.log('...............');
mirroWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);
