function testSubstring(text, startIndex, count) {

    let endIndex = Math.min(text.length, startIndex + count);
    let result = text.substring(startIndex, endIndex);
    console.log(result);
}

testSubstring('ASentence', 1, 8);
console.log('...............');
testSubstring('SkipWord', 4, 7);