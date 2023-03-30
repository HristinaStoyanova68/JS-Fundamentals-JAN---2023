function mirrorWords(input) {

    let wordPattern = /(@|#)(?<word1>[a-z]{3,})\1\1(?<word2>[a-z]{3,})\1/gi;

    let matched = input[0].match(wordPattern);

    if (matched === null) {
        console.log(`No word pairs found!\nNo mirror words!`);
    } else {
        console.log(`${matched.length} word pairs found!`);
        let mirrorWords = [];
        for (const line of matched) {

            let words = line.substring(1, line.length - 1).split(/@{2}|#{2}/g);

            let reversed = words[1]
                .split('')
                .reverse()
                .join('');
            if (words[0] === reversed) {
                mirrorWords.push(`${words[0]} <=> ${words[1]}`)
            }
        }
        if (mirrorWords.length !== 0) {
            console.log('The mirror words are:');
            console.log(mirrorWords.join(', '));
        } else {
            console.log('No mirror words!');
        }
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]
);
console.log('............');
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
console.log('..............');
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);