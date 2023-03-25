function mirrorWords(input) {

    let pattern = /([@#])(?<word1>[a-z]{3,})\1\1(?<word2>[a-z]{3,})\1/gi;

    let matchedAsArr = input[0].match(pattern);

    if (matchedAsArr === null) {

        console.log('No word pairs found!');
        console.log('No mirror words!');

    } else {
        let countMatched = matchedAsArr.length;

        console.log(`${countMatched} word pairs found!`);
        let linesForPrint = [];

        for (const line of matchedAsArr) {

            let matced = pattern.exec(line);

            let reversedWord = matced.groups['word2']
                .split('')
                .reverse()
                .join('');
            if (matced.groups['word1'] === reversedWord) {
                linesForPrint.push(`${matced.groups['word1']} <=> ${matced.groups['word2']}`);
            }
            matced = pattern.exec(line);
        }

        if (linesForPrint.length === 0) {

            console.log('No mirror words!');
        } else {
            console.log(`The mirror words are:\n${linesForPrint.join(', ')}`);
        }
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]
);
console.log('..............');
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
console.log('..............');
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);